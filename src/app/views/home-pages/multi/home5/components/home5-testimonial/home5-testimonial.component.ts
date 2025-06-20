import type { TestimonialType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home5-testimonial',
    imports: [CarouselModule, CommonModule,RouterLink],
    templateUrl: './home5-testimonial.component.html',
    styles: ``
})
export class Home5TestimonialComponent {
    testimonials: TestimonialType[] = [
        {
            rating: 5,
            image: 'assets/img/all-images/testimonial/testimonial-img7.png',
            name: 'Sheldon Jackson',
            role: 'Shop Store Owner',
            message: '“Working with has been a game- Best changer for our business. Their IT and support team is always responsive, an their expertise has helped us stream our operations, We no longer worry.”',
        },
        {
            rating: 5,
            image: 'assets/img/all-images/testimonial/testimonial-img8.png',
            name: 'Alex Robertson',
            role: 'Shop Store Owner',
            message: '“Our network security has never been stronger. Their proactive monitoring and customized security solutions on have given us peace of mind. Our data is safe, and our compliance has Tech.”',
        },
        {
            rating: 5,
            image: 'assets/img/all-images/testimonial/testimonial-img7.png',
            name: 'Henry Gayle',
            role: 'Shop Store Owner',
            message: '“Has provided us on with top-notch IT services. Their solutions are tailored to our business, & their ongoing support is second to none. We’ve seen significant improvements in our productivity and.”',
        },
        {
            rating: 5,
            image: 'assets/img/all-images/testimonial/testimonial-img7.png',
            name: 'Sheldon Jackson',
            role: 'Shop Store Owner',
            message: '“Working with has been a game- Best changer for our business. Their IT and support team is always responsive, an their expertise has helped us stream our operations, We no longer worry.”',
        },
        {
            rating: 5,
            image: 'assets/img/all-images/testimonial/testimonial-img8.png',
            name: 'Alex Robertson',
            role: 'Shop Store Owner',
            message: '“Our network security has never been stronger. Their proactive monitoring and customized security solutions on have given us peace of mind. Our data is safe, and our compliance has Tech.”',
        },
        {
            rating: 5,
            image: 'assets/img/all-images/testimonial/testimonial-img7.png',
            name: 'Henry Gayle',
            role: 'Shop Store Owner',
            message: '“Has provided us on with top-notch IT services. Their solutions are tailored to our business, & their ongoing support is second to none. We’ve seen significant improvements in our productivity and.”',
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
