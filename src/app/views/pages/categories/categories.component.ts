import { butterService } from '@/app/services';
import { ServiceCardComponent } from "@app/components/cards/service-card/service-card.component";
import { blogs2 } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component, signal, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeroComponent } from '@app/components/hero/hero.component';

interface Category {
  name: string;
  slug: string;
}

@Component({
  selector: 'app-categories',
  imports: [CommonModule, HeroComponent, ServiceCardComponent],
  templateUrl: './categories.component.html',
  styles: ``
})
export class CategoriesComponent {
  pageTitle: string = 'Categories';
  blogs = blogs2;

  categories = signal<Category[]>([]);
  page = signal(1);
  pageSize = signal(10);
  moreAvailable = signal(false);

  private readonly router = inject(Router);

  constructor() {
    effect(() => {
      this.getCategories();
    });
  }

  getCategories() {
    butterService.category.list()
      .then((res: any) => {
        const newCategories: Category[] = res?.data?.data || [];
        this.categories.set(newCategories);
      })
      .catch((err) => {
        console.error(`Error fetching categories: ${err}`);
      });
  }

  viewCategory(category: Category): void {
    this.router.navigate(['/posts', category.slug]);
  }
}
