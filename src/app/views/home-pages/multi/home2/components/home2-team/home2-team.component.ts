import type { TeamMemberType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home2-team',
    imports: [CommonModule,RouterLink],
    templateUrl: './home2-team.component.html',
    styles: ``
})
export class Home2TeamComponent {
    teamMembers:TeamMemberType[] = [
        {
            name: 'Alex Robertson',
            role: 'Founder - CEO',
            image: 'assets/img/all-images/team/team-img4.png',
            duration: 800
        },
        {
            name: 'Ayesha Khanam',
            role: 'Problem Solver',
            image: 'assets/img/all-images/team/team-img5.png',
            duration: 1000
        },
        {
            name: 'Shakib Al Hasan',
            role: 'Problem Solver',
            image: 'assets/img/all-images/team/team-img6.png',
            duration: 1200
        },
        {
            name: 'Sofia Hernandez',
            role: 'Problem Solver',
            image: 'assets/img/all-images/team/team-img7.png',
            duration: 1200
        }
    ];
}
