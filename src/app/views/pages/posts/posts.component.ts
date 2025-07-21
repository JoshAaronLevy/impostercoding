import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { butterService } from '@/app/services';
import { estimateReadingTime } from '@/app/helpers/utils';
import Fuse from 'fuse.js';

interface Post {
  title: string;
  published: string;
  featured_image: string;
  summary: string;
  slug: string;
  body?: string;
  readingTime?: string;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  readonly posts = signal<Post[]>([]);
  private readonly allPosts = signal<Post[]>([]);
  readonly page = signal(1);
  readonly pageSize = signal(10);
  readonly moreAvailable = signal(false);
  readonly loading = signal(true);
  readonly categorySlug = signal<string | null>(null);

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => this.loadData());
    this.route.queryParamMap.subscribe(() => this.loadData());
  }

  private loadData(): void {
    const slug = this.route.snapshot.paramMap.get('categorySlug');
    const searchQuery = this.route.snapshot.queryParamMap.get('q')?.toLowerCase() ?? '';

    this.categorySlug.set(slug);
    this.page.set(1);
    this.fetchPosts(1, slug, searchQuery);
  }

  private async fetchPosts(
    page: number,
    categorySlug: string | null = null,
    searchQuery: string = ''
  ): Promise<void> {
    this.loading.set(true);

    const options = {
      page,
      page_size: this.pageSize(),
      ...(categorySlug ? { category_slug: categorySlug } : {})
    };

    try {
      const res = await butterService.post.list(options);

      const basePosts: Post[] = (res.data?.data ?? []).map((post: any) => ({
        ...post,
        readingTime: estimateReadingTime(post.body)
      }));

      // Fetch full body content
      const postPromises = basePosts.map(async (post) => {
        const res = await butterService.post.retrieve(post.slug);
        return {
          ...post,
          body: res.data?.data?.body ?? ''
        };
      });

      const postsWithBody = await Promise.all(postPromises);

      if (page === 1) {
        this.allPosts.set(postsWithBody);
        this.posts.set(this.filterPosts(postsWithBody, searchQuery));
      } else {
        const updated = [...this.allPosts(), ...postsWithBody];
        this.allPosts.set(updated);
        this.posts.set(this.filterPosts(updated, searchQuery));
      }

      this.moreAvailable.set(postsWithBody.length === this.pageSize());
    } catch (err) {
      console.error('Error fetching posts:', err);
      this.moreAvailable.set(false);
    } finally {
      this.loading.set(false);
    }
  }

  private filterPosts(posts: Post[], searchQuery: string): Post[] {
    if (!searchQuery) return posts;

    const fuse = new Fuse(posts, {
      keys: ['title', 'summary', 'body'],
      includeScore: true,
      threshold: 0.4,
      ignoreLocation: true,
      useExtendedSearch: true
    });

    const results = fuse.search(searchQuery);
    return results.map(result => result.item);
  }

  loadMore(): void {
    const nextPage = this.page() + 1;
    this.page.set(nextPage);
    this.fetchPosts(nextPage, this.categorySlug());
  }

  viewPost(post: Post): void {
    this.router.navigate([`/${post.slug}`]);
  }
}
