import { butterService } from '@/app/services';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface Category {
  name: string;
  slug: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  categories: any;

  private readonly router = inject(Router);

  constructor() {
    this.init();
  }

  init() {
    this.getCategories();
  }

  getCategories() {
    butterService.category.list()
      .then((res: any) => {
        this.categories = (res?.data?.data || []);
      })
      .catch((err) => {
        console.error('Error fetching categories:', err);
      });
  }

  viewCategory(category: Category): void {
    this.router.navigate(['/posts', category.slug]);
  }
}
