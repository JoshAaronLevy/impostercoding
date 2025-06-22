import type { MenuItem } from '@/types';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-nav-items',
    imports: [RouterLink, CommonModule],
    templateUrl: './nav-items.component.html',
    styles: ``
})
export class NavItemsComponent {

    @Input() themeBtn: string = ''
    @Input() arrow?: boolean = false
    @Input() arrow2?: boolean = false
    @Input() btnSpace?: boolean = false

    menuItems: MenuItem[] = [
        { title: 'Posts', link: '' },
        { title: 'Categories', link: '/categories' },
        { title: 'Tags', link: '' },
        {
            title: 'Pages',
            icon: 'fa-solid fa-angle-down',
            subMenu: [
                { title: 'FAQ', link: '/pages/faq' },
                { title: '404', link: '/pages/error-404' },
            ],
        },
        {
            title: 'Services',
            icon: 'fa-solid fa-angle-down',
            subMenu: [
                { title: 'Our Services', link: '/our-services' },
                {
                    title: 'Service Details',
                    subMenu: [
                        { title: "Service Single", link: '/services/single' }
                    ]
                },
            ],
        },
        {
            title: 'Blogs',
            icon: 'fa-solid fa-angle-down',
            subMenu: [
                {
                    title: 'Blog Sidebar',
                    subMenu: [
                        { title: 'Blog Left V1', link: '/blog-sidebar/left-1' },
                    ],
                },
                {
                    title: 'Blog Details',
                    subMenu: [
                        { title: 'Blog Single', link: '/blog-details/single' },
                    ],
                },
            ],
        },
    ];
}
