import type { PricingPlanType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home3-pricing',
    imports: [CommonModule],
    templateUrl: './home3-pricing.component.html',
    styles: ``
})

export class Home3PricingComponent {
    isYearly = true;

    plans: PricingPlanType[] = [
        {
            name: 'Basic Plan',
            monthlyPrice: 49,
            yearlyPrice: 99,
            features: ['All Message In One Dashboard','Customer Data In Tickets','Automation’s to Finish tasks','Efficient Team Management','Real Time Progress Reporting','Dedicated Account Manager'],
        },
        {
            name: 'Team Plan',
            monthlyPrice: 60,
            yearlyPrice: 199,
            features: ['All Message In One Dashboard','Customer Data In Tickets','Automation’s to Finish tasks','Efficient Team Management','Real Time Progress Reporting','Dedicated Account Manager'],
        },
        {
            name: 'Business Plan',
            monthlyPrice: 99,
            yearlyPrice: 399,
            features: ['All Message In One Dashboard','Customer Data In Tickets','Automation’s to Finish tasks','Efficient Team Management','Real Time Progress Reporting','Dedicated Account Manager'],
        }
    ];

    togglePlan() {
        this.isYearly = !this.isYearly;
    }
}
