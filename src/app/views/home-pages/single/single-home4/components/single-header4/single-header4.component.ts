import { StickyScrollDirective } from '@/core/directives/sticky-scroll.directive';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SingleMobileMenuComponent } from '@app/components/single-mobile-menu/single-mobile-menu.component';
import { SingleNavItemsComponent } from '@app/components/single-nav-items/single-nav-items.component';

@Component({
  selector: 'app-single-header4',
  imports: [RouterLink, SingleNavItemsComponent, SingleMobileMenuComponent, StickyScrollDirective],
  templateUrl: './single-header4.component.html',
  styles: ``
})
export class SingleHeader4Component {
 menuItems: string[] = ["About Us", "Services", "Works", "Case Study", "Pricing", "Blogs"]
    isMobileMenuOpen = false;
    menuOpen = false;

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    closeMobileMenu() {
        this.isMobileMenuOpen = false;
    }
}
