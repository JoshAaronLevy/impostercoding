import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountUpModule } from 'ngx-countup';

@Component({
    selector: 'app-home5-about',
    imports: [CountUpModule,CommonModule,RouterLink],
    templateUrl: './home5-about.component.html',
    styles: ``
})
export class Home5AboutComponent {
    counters = [
        {
            value: 98,
            suffix: '%',
            label: 'Positive Rate',
            duration: 800
        },
        {
            value: 28,
            suffix: 'K',
            label: 'Download App',
            duration: 900
        },
        {
            value: 32,
            suffix: '+',
            label: 'New Features',
            duration: 1000,
            box2: true
        }
    ];
}
