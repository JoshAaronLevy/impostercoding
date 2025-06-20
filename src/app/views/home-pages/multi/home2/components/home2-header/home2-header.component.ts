import { StickyScrollDirective } from '@/core/directives/sticky-scroll.directive';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavItemsComponent } from '@app/components/nav-items/nav-items.component';
import { MobileMenuComponent } from "@app/components/mobile-menu/mobile-menu.component";

@Component({
  selector: 'app-home2-header',
  imports: [RouterLink, NavItemsComponent, StickyScrollDirective, CommonModule, MobileMenuComponent],
  templateUrl: './home2-header.component.html',
  styles: ``
})
export class Home2HeaderComponent {
    isMobileMenuOpen = false;

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    closeMobileMenu() {
        this.isMobileMenuOpen = false;
    }
}
