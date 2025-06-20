import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home5-work',
    imports: [CommonModule,RouterLink],
    templateUrl: './home5-work.component.html',
    styles: ``
})
export class Home5WorkComponent {
    steps = [
        {
            step: 'Step 1',
            icon: 'assets/img/icons/work1.svg',
            title: 'User Analytics',
            duration: 800
        },
        {
            step: 'Step 2',
            icon: 'assets/img/icons/work2.svg',
            title: 'Creative Design',
            duration: 900
        },
        {
            step: 'Step 3',
            icon: 'assets/img/icons/work3.svg',
            title: 'Smart Coding',
            duration: 1000
        },
        {
            step: 'Step 4',
            icon: 'assets/img/icons/work4.svg',
            title: 'Online Support',
            duration: 1100,
            box2: true
        }
    ];
}
