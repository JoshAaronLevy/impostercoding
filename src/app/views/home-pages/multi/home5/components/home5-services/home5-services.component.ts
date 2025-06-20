import type { ServiceType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home5-services',
    imports: [CarouselModule, CommonModule,RouterLink],
    templateUrl: './home5-services.component.html',
    styles: ``
})
export class Home5ServicesComponent {
    services: ServiceType[] = [
        {
            id: 1,
            title: 'Custom Edit Tool',
            description: 'Design your page in real time and see the results instantly. Create and customize your all landing pages.',
            icon: 'assets/img/icons/service-icon17.svg'
        },
        {
            id: 2,
            title: 'Easy To Customize',
            description: 'We bring your ideas to life with mobile applications designed to deliver results our team of expert.',
            icon: 'assets/img/icons/service-icon17.svg'
        },
        {
            id: 3,
            title: 'Built In Safety Chat',
            description: 'Ensuring your app reaches its full potential on iOS, Android, or both. From the initial concept to post.',
            icon: 'assets/img/icons/service-icon17.svg'
        },
        {
            id: 4,
            title: 'Custom Edit Tool',
            description: 'Design your page in real time and see the results instantly. Create and customize your all landing pages.',
            icon: 'assets/img/icons/service-icon17.svg'
        },
        {
            id: 5,
            title: 'Easy To Customize',
            description: 'We bring your ideas to life with mobile applications designed to deliver results our team of expert.',
            icon: 'assets/img/icons/service-icon17.svg'
        },
        {
            id: 6,
            title: 'Built In Safety Chat',
            description: 'Ensuring your app reaches its full potential on iOS, Android, or both. From the initial concept to post.',
            icon: 'assets/img/icons/service-icon17.svg'
        },
    ];

    carouselOptions = {
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        items: 10,
        navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    }
}
