import { services } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceCardComponent } from "@app/components/cards/service-card/service-card.component";

@Component({
    selector: 'app-home1-service',
     host: { 'data-component-id': 'home1-service-instance' },
    imports: [CommonModule, ServiceCardComponent],
    templateUrl: './home1-service.component.html',
    styles: ``
})
export class Home1ServiceComponent {
    services = services
}
