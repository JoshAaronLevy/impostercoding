import type { TestimonialType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home4-testimonial',
     host: { 'data-component-id': 'home4-testimonial-instance' },
    imports: [CarouselModule, CommonModule,RouterLink],
    templateUrl: './home4-testimonial.component.html',
    styles: ``
})
export class Home4TestimonialComponent {
    testimonials: TestimonialType[] = [
        {
            rating: 5,
            message: '“Working with [Company] has been a game-changer for our business. Their IT and support team is always responsive, and their expertise has helped us streamline our operations. We no longer worry.”',
            image: 'assets/img/all-images/testimonial/testimonial-img7.png',
            name: 'Sheldon Jackson',
            role: 'Shop Store Owner',
        },
        {
            rating: 5,
            message: '“Our network security has never been stronger. Their proactive monitoring and customized security solutions have given us peace of mind. Our data is safe, and our compliance is solid.”',
            image: 'assets/img/all-images/testimonial/testimonial-img8.png',
            name: 'Alex Robertson',
            role: 'Shop Store Owner',
        },
        {
            rating: 5,
            message: '“[Company] has provided us with top-notch IT services. Their solutions are tailored to our business, and their ongoing support is second to none. We’ve seen significant improvements in our productivity.”',
            image: 'assets/img/all-images/testimonial/testimonial-img7.png',
            name: 'Henry Gayle',
            role: 'Shop Store Owner',
        },
        {
            rating: 5,
            message: '“Working with [Company] has been a game-changer for our business. Their IT and support team is always responsive, and their expertise has helped us streamline our operations. We no longer worry.”',
            image: 'assets/img/all-images/testimonial/testimonial-img7.png',
            name: 'Sheldon Jackson',
            role: 'Shop Store Owner',
        },
        {
            rating: 5,
            message: '“Our network security has never been stronger. Their proactive monitoring and customized security solutions have given us peace of mind. Our data is safe, and our compliance is solid.”',
            image: 'assets/img/all-images/testimonial/testimonial-img8.png',
            name: 'Alex Robertson',
            role: 'Shop Store Owner',
        },
        {
            rating: 5,
            message: '“[Company] has provided us with top-notch IT services. Their solutions are tailored to our business, and their ongoing support is second to none. We’ve seen significant improvements in our productivity.”',
            image: 'assets/img/all-images/testimonial/testimonial-img7.png',
            name: 'Henry Gayle',
            role: 'Shop Store Owner',
        },
    ];

    customOptions = {
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
