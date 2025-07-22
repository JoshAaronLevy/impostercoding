import { Component, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { butterService } from '@/app/services';
import { HeroComponent } from '@app/components/hero/hero.component';
import { CategoryCardComponent } from "@app/components/cards/category-card/category-card.component";

interface Category {
  name: string;
  slug: string;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, HeroComponent, CategoryCardComponent],
  templateUrl: './categories.component.html'
})
export class CategoriesComponent {
  pageTitle: string = 'Categories';
  categories = signal<Category[]>([]);
  page = signal(1);
  pageSize = signal(10);
  moreAvailable = signal(false);

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  // Tracks current query param value
  readonly activeCategory = toSignal(
    this.route.queryParamMap.pipe(map(params => params.get('category')))
  );

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
    this.router.navigate(['/'], {
      queryParams: { category: category.slug }
    });
  }
}
