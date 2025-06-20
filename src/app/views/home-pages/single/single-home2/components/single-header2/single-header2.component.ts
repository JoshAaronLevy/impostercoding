import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SingleNavItemsComponent } from "@app/components/single-nav-items/single-nav-items.component";
import { SingleMobileMenuComponent } from "@app/components/single-mobile-menu/single-mobile-menu.component";
import { StickyScrollDirective } from '@/core/directives/sticky-scroll.directive';

@Component({
    selector: 'app-single-header2',
     host: { 'data-component-id': 'home2-header-instance' },
    imports: [RouterLink, SingleNavItemsComponent, SingleMobileMenuComponent,StickyScrollDirective],
    templateUrl: './single-header2.component.html',
    styles: ``
})
export class SingleHeader2Component {
    menuItems: string[] = ["About Us", "Works", "Services", "Testimonials", "Team", "Blogs"]
    isMobileMenuOpen = false;
    menuOpen = false;

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    closeMobileMenu() {
        this.isMobileMenuOpen = false;
    }
}
