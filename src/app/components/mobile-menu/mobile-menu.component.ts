import type { MenuItem } from '@/types';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-mobile-menu',
    imports: [CommonModule, RouterLink],
    templateUrl: './mobile-menu.component.html',
    styles: ``
})
export class MobileMenuComponent {
    @Input() isMobileMenuOpen!: boolean

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen
    }

    @Input() themeBtn: string = 'btn1'
    @Input() mobileMenuClass: string = 'homepage-body'
    @Input() arrow?: boolean = false
    @Input() arrow2?: boolean = false

    menuOpen = false;
    toggleMenu(): void {
        this.menuOpen = !this.menuOpen;
    }

    toggleSubMenu(item: MenuItem, event?: Event): void {
        if (event) {
            event.stopPropagation();
        }

        if (item.subMenu) {
            item.isOpen = !item.isOpen;
        }
    }

    megaMenu = [
        {
            label: 'Home',
            icon: 'fa-regular fa-angle-down',
            subMenu: []
        }
    ];

    menu: MenuItem[] = [
        { title: 'Posts', link: '/' },
        { title: 'Categories', link: '/categories' },
        // { title: 'Tags', link: '/categories' },
        // { title: 'Contact', link: '/posts' },
    ]

}
