import { blogs } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogCardComponent } from "@app/components/cards/blog-card/blog-card.component";

@Component({
    selector: 'app-home1-blogs',
    imports: [RouterLink, CommonModule, BlogCardComponent],
    templateUrl: './home1-blogs.component.html',
    styles: ``
})
export class Home1BlogsComponent {
    blogs = blogs
}
