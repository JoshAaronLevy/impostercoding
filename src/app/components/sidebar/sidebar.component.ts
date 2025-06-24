import { butterService } from '@/app/services';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  categories: any;

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
}
