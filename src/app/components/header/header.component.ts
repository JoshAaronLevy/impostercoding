import { StickyScrollDirective } from '@/core/directives/sticky-scroll.directive';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MobileMenuComponent } from "../mobile-menu/mobile-menu.component";
import { NavItemsComponent } from "../nav-items/nav-items.component";
import { FormsModule } from '@angular/forms';
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule, RouterLink, NavItemsComponent, StickyScrollDirective, CommonModule, MobileMenuComponent, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  searchOpen = false;
  searchTerm = '';

  constructor(private router: Router) { }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  toggleSearch() {
    this.searchOpen = !this.searchOpen;
  }

  submitSearch() {
    const query = this.searchTerm.trim();

    if (query) {
      this.router.navigate([], {
        queryParams: { search: query },
        queryParamsHandling: 'merge'
      });
    } else {
      this.router.navigate([], {
        queryParams: { search: null },
        queryParamsHandling: 'merge'
      });
    }
  }
}
