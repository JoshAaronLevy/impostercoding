import { Component, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { butterService } from '@/app/services';

// You should define the shape of your posts more concretely in a real app
interface Post {
    title: string;
    summary: string;
    // image: string;
    slug: string;
}

@Component({
    selector: 'app-post-list',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div *ngFor="let post of posts()">
            <h3 (click)="viewPost(post)">{{ post.slug }}</h3>
        </div>

        <button *ngIf="moreAvailable()" (click)="loadMore()">
            Load More
        </button>
    `,
})
export class BlogHomeComponent {
    // --- Signals (State)
    posts = signal<Post[]>([]);
    page = signal(1);
    pageSize = signal(10);
    moreAvailable = signal(false);

    private readonly router = inject(Router);

    constructor() {
        // Automatically run fetch logic when the page number changes
        effect(() => {
            this.fetchPosts(this.page());
        });
    }

    // --- Fetch Data
    private fetchPosts(page: number): void {
        butterService.post
            .list({ page, page_size: this.pageSize() })
            .then((res: any) => {
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

    // --- Triggered on button click
    loadMore(): void {
        this.page.update((p) => p + 1);
    }

    viewPost(post: Post): void {
        this.router.navigate([`/${post.slug}`]);
    }
}
