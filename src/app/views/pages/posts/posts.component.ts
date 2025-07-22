import { Component, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
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
  category?: string;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  readonly posts = signal<Post[]>([]);
  private readonly allPosts = signal<Post[]>([]);
  readonly page = signal(1);
  readonly pageSize = signal(10);
  readonly moreAvailable = signal(false);
  readonly loading = signal(true);
  readonly category = signal<string | null>(null);
  readonly search = signal<string>('');

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  private readonly paramMapSignal = toSignal(this.route.paramMap);
  private readonly queryParamMapSignal = toSignal(this.route.queryParamMap);

  constructor() {
    effect(() => {
      const queryParamMap = this.queryParamMapSignal();

      const category = queryParamMap?.get('category') ?? null;
      const searchQuery = queryParamMap?.get('search')?.toLowerCase() ?? '';

      this.category.set(category);
      this.search.set(searchQuery);
      this.page.set(1);
      this.fetchPosts(1, category);
    });
  }

  private async fetchPosts(
    page: number,
    category: string | null = null
  ): Promise<void> {
    this.loading.set(true);

    const options = {
      page,
      page_size: this.pageSize(),
      ...(category ? { category_slug: category } : {})
    };

    try {
      const res = await butterService.post.list(options);

      const basePosts: Post[] = (res.data?.data ?? []).map((post: any) => ({
        ...post,
        readingTime: estimateReadingTime(post.body),
        category: post.categories?.[0]?.slug ?? ''  // assumes first category slug is primary
      }));

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
      } else {
        const updated = [...this.allPosts(), ...postsWithBody];
        this.allPosts.set(updated);
      }

      // Apply filtering using AND logic
      const filtered = this.filterPosts(this.allPosts(), this.search(), this.category());
      this.posts.set(filtered);

      this.moreAvailable.set(postsWithBody.length === this.pageSize());
    } catch (err) {
      console.error('Error fetching posts:', err);
      this.moreAvailable.set(false);
    } finally {
      this.loading.set(false);
    }
  }

  private filterPosts(posts: Post[], searchQuery: string, category: string | null): Post[] {
    const matchesCategory = (post: Post) =>
      !category || post.category === category;

    const matchesSearch = (post: Post) => {
      if (!searchQuery) return true;

      const fuse = new Fuse([post], {
        keys: ['title', 'summary', 'body'],
        includeScore: true,
        threshold: 0.4,
        ignoreLocation: true,
        useExtendedSearch: true
      });

      return fuse.search(searchQuery).length > 0;
    };

    return posts.filter(post => matchesCategory(post) && matchesSearch(post));
  }

  loadMore(): void {
    const nextPage = this.page() + 1;
    this.page.set(nextPage);
    this.fetchPosts(nextPage, this.category());
  }

  viewPost(post: Post): void {
    this.router.navigate([`/${post.slug}`]);
  }
}
