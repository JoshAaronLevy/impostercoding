import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { butterService } from '@/app/services';
import { estimateReadingTime } from '@/app/helpers/utils';

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
  readonly page = signal(1);
  readonly pageSize = signal(10);
  readonly moreAvailable = signal(false);
  readonly loading = signal(true);
  readonly categorySlug = signal<string | null>(null);

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('categorySlug');
      this.categorySlug.set(slug);
      this.page.set(1);
      this.fetchPosts(1, slug);
    });

    this.route.queryParamMap.subscribe(params => {
      const searchQuery = params.get('q')?.toLowerCase() ?? '';
      const slug = this.route.snapshot.paramMap.get('categorySlug');
      this.categorySlug.set(slug);
      this.page.set(1);
      this.fetchPosts(1, slug, searchQuery);
    });
  }

  private fetchPosts(
    page: number,
    categorySlug: string | null = null,
    searchQuery: string = ''
  ): void {
    this.loading.set(true);

    const options = {
      page,
      page_size: this.pageSize(),
      ...(categorySlug ? { category_slug: categorySlug } : {})
    };

    butterService.post
      .list(options)
      .then((res: any) => {
        let newPosts: Post[] = (res.data?.data ?? []).map((post: any) => ({
          ...post,
          readingTime: estimateReadingTime(post.body)
        }));

        if (searchQuery) {
          newPosts = newPosts.filter(post =>
            post.title.toLowerCase().includes(searchQuery) ||
            post.summary.toLowerCase().includes(searchQuery) ||
            (post['body']?.toLowerCase?.().includes(searchQuery))
          );
        }

        if (page === 1) {
          this.posts.set(newPosts);
        } else {
          this.posts.update(existing => [...existing, ...newPosts]);
        }

        this.moreAvailable.set(newPosts.length === this.pageSize());
        this.loading.set(false);
      })
      .catch(err => {
        console.error('Error fetching posts:', err);
        this.moreAvailable.set(false);
        this.loading.set(false);
      });
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
