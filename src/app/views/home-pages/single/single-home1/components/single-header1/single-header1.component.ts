import { StickyScrollDirective } from '@/core/directives/sticky-scroll.directive';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SingleNavItemsComponent } from "@app/components/single-nav-items/single-nav-items.component";
import { SingleMobileMenuComponent } from "@app/components/single-mobile-menu/single-mobile-menu.component";

@Component({
    selector: 'app-single-header1',
    imports: [StickyScrollDirective, RouterLink, CommonModule, SingleNavItemsComponent, SingleMobileMenuComponent],
    templateUrl: './single-header1.component.html',
    styles: ``
})
export class SingleHeader1Component {
    isMobileMenuOpen = false;
    menuOpen = false;

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    closeMobileMenu() {
        this.isMobileMenuOpen = false;
    }

}
