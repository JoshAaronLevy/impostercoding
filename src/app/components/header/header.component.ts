import { StickyScrollDirective } from '@/core/directives/sticky-scroll.directive';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MobileMenuComponent } from "../mobile-menu/mobile-menu.component";
import { NavItemsComponent } from "../nav-items/nav-items.component";

@Component({
  selector: 'app-header',
  imports: [RouterLink, NavItemsComponent, StickyScrollDirective, CommonModule, MobileMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
    isMobileMenuOpen = false;

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    closeMobileMenu() {
        this.isMobileMenuOpen = false;
    }
}
