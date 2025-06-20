import { teamMembers } from '@/assets/data';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MemberCardComponent } from "@app/components/cards/member-card/member-card.component";

@Component({
    selector: 'app-home1-team',
     host: { 'data-component-id': 'home1-team-instance' },
    imports: [CommonModule, MemberCardComponent],
    templateUrl: './home1-team.component.html',
    styles: ``
})
export class Home1TeamComponent {
    teamMembers = teamMembers
}
