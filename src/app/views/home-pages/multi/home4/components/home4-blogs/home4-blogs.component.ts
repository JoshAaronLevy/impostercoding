import type { BlogType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home4-blogs',
    imports: [CommonModule,RouterLink],
    templateUrl: './home4-blogs.component.html',
    styles: ``
})
export class Home4BlogsComponent {
    blogPosts: BlogType[] = [
        {
            id: 1,
            image: 'assets/img/all-images/blog/blog-img8.png',
            date: '4 August 2024',
            title: 'How to Choose the Right BPO Partner for Your Best Business',
            link: '/blog-details/single'
        },
        {
            id: 2,
            image: 'assets/img/all-images/blog/blog-img9.png',
            date: '5 August 2024',
            title: 'The Future of BPO: Trends On Shaping A Customer Support',
            link: '/blog-details/single'
        },
        {
            id: 3,
            image: 'assets/img/all-images/blog/blog-img10.png',
            date: '6 August 2024',
            title: 'From Data to Decisions: Using Analytic Call Centre Operation',
            link: '/blog-details/single'
        }
    ];
}
