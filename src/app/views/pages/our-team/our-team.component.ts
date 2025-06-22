import { Component } from '@angular/core';
import { PageHeaderComponent } from "@app/components/page-header/page-header.component";
import { teamMembers } from '@/assets/data';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-our-team',
    imports: [PageHeaderComponent, CommonModule],
    templateUrl: './our-team.component.html',
    styles: ``
})
export class OurTeamComponent {
    teamMembers = teamMembers
}
