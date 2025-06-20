import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-home2-services',
    imports: [NgbNavModule, CommonModule,GsapRevealDirective,RouterLink],
    templateUrl: './home2-services.component.html',
    styles: ``
})
export class Home2ServicesComponent {
    active = 1;

    tabItems = [
        {
            id: 1,
            label: '24/7 Call Handling',
            icon: 'assets/img/icons/service-icon7.svg',
        },
        {
            id: 2,
            label: 'Live Chat Support',
            icon: 'assets/img/icons/service-icon8.svg',
        },
        {
            id: 3,
            label: 'Lead Generation',
            icon: 'assets/img/icons/service-icon9.svg',
        },
        {
            id: 4,
            label: 'Professional Staff',
            icon: 'assets/img/icons/service-icon10.svg',
        }
    ];
}
