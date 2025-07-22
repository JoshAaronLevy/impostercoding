import { toKebabCase } from '@/app/helpers/utils';
import { butterService } from '@/app/services';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  categories: any;
  activeCategory: string | null = null;

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  constructor() {
    this.init();
    this.route.queryParamMap.subscribe((params) => {
      this.activeCategory = params.get('category');
    });
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

  selectCategory(slug: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: slug },
      queryParamsHandling: 'merge'
    });
  }

  isActive(categoryName: string): boolean {
    return toKebabCase(categoryName) === this.activeCategory;
  }

  toKebabCase = toKebabCase;
}
