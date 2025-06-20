import type { FaqType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-home5-faq',
    imports: [NgbAccordionModule,CommonModule],
    templateUrl: './home5-faq.component.html',
    styles: ``
})
export class Home5FaqComponent {
    faqs:FaqType[] = [
        {
            question: 'How long does it take to develop a mobile app?',
            answer: 'The timeline for app development depends on the complexity of the project, the features required, and the platforms you want target (iOS, Android, or both). On average, simple app.',
        },
        {
            question: 'How much does it cost to develop a mobile app?',
            answer: 'The cost varies depending on features, platforms, and timeline. Simple apps are cheaper than complex multi-platform solutions.',
        },
        {
            question: 'Do offer post-launch support and maintenance?',
            answer: 'Yes, we offer ongoing support and maintenance to ensure your app remains up-to-date and secure.',
        },
        {
            question: 'Will my app work on both iOS and Android?',
            answer: 'Yes, we can develop cross-platform apps using technologies like Flutter or React Native, or build native versions for both platforms.',
        },
        {
            question: 'How do you ensure the security of the app?',
            answer: 'We follow secure coding practices, perform regular code audits, and implement encryption/authentication best practices.',
        }
    ];
}
