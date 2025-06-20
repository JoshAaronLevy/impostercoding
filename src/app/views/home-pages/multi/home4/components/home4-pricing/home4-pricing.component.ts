import type { PricingPlanType } from '@/types';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home4-pricing',
    imports: [CommonModule],
    templateUrl: './home4-pricing.component.html',
    styles: ``
})
export class Home4PricingComponent {
    pricingPlans: PricingPlanType[] = [
        {
            name: 'Basic',
            monthlyPrice: 60,
            yearlyPrice: 600,
            features: [
                'Tailored IT Solutions',
                'Proactive System Monitoring',
                'Scalable Cloud Solutions',
                'Cybersecurity Protection',
                'Secure Data Backup & Recovery',
                'Custom Software Development',
                'IT Infrastructure Management',
                'Data Encryption & Compliance',
            ],
        },
        {
            name: 'Pro',
            monthlyPrice: 80,
            yearlyPrice: 800,
            features: [
                'Tailored IT Solutions',
                'Proactive System Monitoring',
                'Scalable Cloud Solutions',
                'Cybersecurity Protection',
                'Secure Data Backup & Recovery',
                'Custom Software Development',
                'IT Infrastructure Management',
                'Data Encryption & Compliance',
            ],
            isPopular: true,
        },
        {
            name: 'Premium',
            monthlyPrice: 70,
            yearlyPrice: 700,
            features: [
                'Tailored IT Solutions',
                'Proactive System Monitoring',
                'Scalable Cloud Solutions',
                'Cybersecurity Protection',
                'Secure Data Backup & Recovery',
                'Custom Software Development',
                'IT Infrastructure Management',
                'Data Encryption & Compliance',
            ],
        },
    ];
}
