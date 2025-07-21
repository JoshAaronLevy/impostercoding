import { Component, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { butterService } from '@/app/services';
import { HeroComponent } from '@app/components/hero/hero.component';
import { SidebarComponent } from '@app/components/sidebar/sidebar.component';
import { PostsComponent } from '../posts/posts.component';

interface Post {
  title: string;
  published: string;
  featured_image: string;
  summary: string;
  slug: string;
}

@Component({
  selector: 'app-home',
  imports: [HeroComponent, SidebarComponent, CommonModule, PostsComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  pageTitle: string = 'Imposter Coding';
}
