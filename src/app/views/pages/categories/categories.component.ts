import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from "@app/components/cards/service-card/service-card.component";
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { butterService } from '@/app/services';
import { LayoutComponent } from '@layouts/layout.component';
import { HeroComponent } from '@app/components/hero/hero.component';

@Component({
  selector: 'app-categories',
  imports: [CommonModule, LayoutComponent, HeroComponent, ServiceCardComponent],
  templateUrl: './categories.component.html',
  styles: ``
})
export class CategoriesComponent {
  pageTitle: string = 'Categories';
  private router = inject(Router);
  private title = inject(Title);
  private meta = inject(Meta);

  loading = signal(false);
  loadError = signal(false);
  categories = signal<any[]>([]);
  category = signal<any>(null);
  showData = signal(false);
  step = signal(1);

  constructor() {
    this.init();
  }

  init() {
    this.loading.set(true);
    this.updateMetaData();
    this.progressLoaderOne();
  }

  updateMetaData() {
    this.title.setTitle(`Categories - Impostor Coding`);
    this.meta.updateTag({
      name: 'description',
      content: `Categories - Impostor Coding`
    });
  }

  progressLoaderOne() {
    setTimeout(() => {
      this.step.set(2);
      this.getCategories();
    }, 50);
  }

  progressLoaderTwo() {
    setTimeout(() => {
      this.step.set(4);
      this.progressLoaderThree();
    }, 50);
  }

  progressLoaderThree() {
    setTimeout(() => {
      this.displayData();
    }, 50);
  }

  getCategories() {
    butterService.category.list()
      .then((res: any) => {
        console.log("Categories: ", res?.data?.data);
        this.categories.set(res?.data?.data || []);
        this.step.set(3);
        this.progressLoaderTwo();
      })
      .catch(() => {
        this.loading.set(false);
        this.loadError.set(true);
      });
  }

  displayData() {
    if (this.categories().length > 0) {
      this.loading.set(false);
      this.showData.set(true);
    } else {
      this.loading.set(false);
      this.loadError.set(true);
    }
  }

  viewCategory(category: any) {
    this.category.set(category.slug);
    console.log(category.slug);
    this.router.navigate(['/category', category.slug]);
  }
}
