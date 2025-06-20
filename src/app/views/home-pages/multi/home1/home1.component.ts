import { blogs2 } from '@/assets/data';
import { Component, signal, effect, inject } from '@angular/core';
import { LayoutComponent } from "@layouts/layout.component";
import { Home1HeroComponent } from "./components/home1-hero/home1-hero.component";
import { BlogSidebarComponent } from '@views/blog-pages/blog-sidebar/components/blog-sidebar/blog-sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { butterService } from '@/app/services';
import { Router } from '@angular/router';

interface Post {
  title: string;
  published: string;
  featured_image: string;
  summary: string;
  // image: string;
  slug: string;
}

@Component({
  selector: 'app-home1',
  imports: [LayoutComponent, Home1HeroComponent, BlogSidebarComponent, CommonModule, RouterLink],
  templateUrl: './home1.component.html',
  styles: ``
})
export class Home1Component {
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
