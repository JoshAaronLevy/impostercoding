import { butterService } from '@/app/services';
import { blogs2 } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component, signal, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeroComponent } from '@app/components/hero/hero.component';

interface Post {
  title: string;
  published: string;
  featured_image: string;
  summary: string;
  slug: string;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroComponent],
  templateUrl: './posts.component.html',
  styles: ``
})
export class PostsComponent implements OnInit {
  pageTitle: string = 'Posts';
  blogs = blogs2;

  posts = signal<Post[]>([]);
  page = signal(1);
  pageSize = signal(10);
  moreAvailable = signal(false);
  loading = signal(true);
  categorySlug = signal<string | null>(null);

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('categorySlug');
      this.categorySlug.set(slug);
      this.page.set(1); // reset pagination
      this.fetchPosts(1, slug);
    });
  }

  private fetchPosts(page: number, categorySlug: string | null = null): void {
    this.loading.set(true);

    const options: any = {
      page,
      page_size: this.pageSize(),
    };

    if (categorySlug) {
      options.category_slug = categorySlug;
    }

    butterService.post
      .list(options)
      .then((res: any) => {
        const newPosts: Post[] = res?.data?.data || [];

        if (page === 1) {
          this.posts.set(newPosts);
        } else {
          this.posts.update((existing) => [...existing, ...newPosts]);
        }

        this.moreAvailable.set(newPosts.length === this.pageSize());
        this.loading.set(false);
      })
      .catch((err) => {
        console.error('Error fetching posts:', err);
        this.moreAvailable.set(false);
        this.loading.set(false);
      });
  }

  loadMore(): void {
    this.page.update((p) => {
      const newPage = p + 1;
      this.fetchPosts(newPage, this.categorySlug());
      return newPage;
    });
  }

  viewPost(post: Post): void {
    this.router.navigate([`/${post.slug}`]);
  }
}
