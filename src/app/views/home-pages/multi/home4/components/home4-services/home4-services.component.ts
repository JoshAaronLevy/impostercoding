import type { ServiceType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home4-services',
    imports: [CommonModule,RouterLink],
    templateUrl: './home4-services.component.html',
    styles: ``
})
export class Home4ServicesComponent {
    services: ServiceType[] = [
        {
            id: 1,
            icon: 'assets/img/icons/service-icon11.svg',
            title: 'Cyber Security Solution',
            description: 'Our advanced cybersecurity solution designed to protect against ever- an evolving threats, approach ensures.'
        },
        {
            id: 2,
            icon: 'assets/img/icons/service-icon12.svg',
            title: 'Scalable Cloud Solutions',
            description: 'Our advanced cybersecurity solution designed to protect against ever- an evolving threats, approach ensures.'
        },
        {
            id: 3,
            icon: 'assets/img/icons/service-icon13.svg',
            title: 'Data Protection Services',
            description: 'Our advanced cybersecurity solution designed to protect against ever- an evolving threats, approach ensures.'
        },
        {
            id: 4,
            icon: 'assets/img/icons/service-icon14.svg',
            title: 'Optimization Management',
            description: 'Our advanced cybersecurity solution designed to protect against ever- an evolving threats, approach ensures.'
        },
        {
            id: 5,
            icon: 'assets/img/icons/service-icon15.svg',
            title: 'HelpDesk 360 Solutions',
            description: 'Our advanced cybersecurity solution designed to protect against ever- an evolving threats, approach ensures.'
        },
        {
            id: 6,
            icon: 'assets/img/icons/service-icon16.svg',
            title: 'Software Development',
            description: 'Our advanced cybersecurity solution designed to protect against ever- an evolving threats, approach ensures.'
        }
    ];
}
