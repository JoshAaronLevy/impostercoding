import { Component, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { butterService } from '@/app/services';
import { HeroComponent } from '@app/components/hero/hero.component';
import { SidebarComponent } from '@app/components/sidebar/sidebar.component';

interface Post {
  title: string;
  published: string;
  featured_image: string;
  summary: string;
  slug: string;
}

@Component({
  selector: 'app-home',
  imports: [HeroComponent, SidebarComponent, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  pageTitle: string = 'Imposter Coding';
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
        const newPosts: Post[] = res?.data?.data;

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
