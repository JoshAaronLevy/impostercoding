import { butterService } from '@/app/services';
import { blogs2 } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component, signal, effect, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HeroComponent } from '@app/components/hero/hero.component';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { PaginationComponent } from "@app/components/pagination/pagination.component";
import { LayoutComponent } from "@layouts/layout.component";

interface Post {
  title: string;
  published: string;
  featured_image: string;
  summary: string;
  slug: string;
}

@Component({
  selector: 'app-posts',
  imports: [PageHeaderComponent, CommonModule, PaginationComponent, RouterLink, LayoutComponent, HeroComponent],
  templateUrl: './posts.component.html',
  styles: ``
})
export class PostsComponent {
  blogs = blogs2;

  posts = signal<Post[]>([]);
  page = signal(1);
  pageSize = signal(10);
  moreAvailable = signal(false);

  private readonly router = inject(Router);

  constructor() {
    effect(() => {
      this.fetchPosts(this.page());
    });
  }

  private fetchPosts(page: number): void {
    butterService.post
      .list({ page, page_size: this.pageSize() })
      .then((res: any) => {
        console.log('Fetched posts: ', res.data.data);
        const newPosts: Post[] = res.data.data;

        if (page === 1) {
          this.posts.set(newPosts);
        } else {
          this.posts.update((existing) => [...existing, ...newPosts]);
        }

        this.moreAvailable.set(newPosts.length === this.pageSize());
      })
      .catch((err) => {
        console.error('Error fetching posts:', err);
        this.moreAvailable.set(false);
      });
  }

  loadMore(): void {
    this.page.update((p) => p + 1);
  }

  viewPost(post: Post): void {
    this.router.navigate([`/${post.slug}`]);
  }
}
