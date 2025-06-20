import { caseStudies } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CaseStudyCardComponent } from "@app/components/cards/case-study-card/case-study-card.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home1-case-studies',
    imports: [CarouselModule, CommonModule, CaseStudyCardComponent,RouterLink],
    templateUrl: './home1-case-studies.component.html',
    styles: ``
})
export class Home1CaseStudiesComponent {
    caseStudySlides = caseStudies

    sliderOptions = {
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
                items: 1,
            },
            1000: {
                items: 2,
            }
        }
    }
}
