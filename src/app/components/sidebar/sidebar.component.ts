import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  categories: string[] = [
    'Cyber Security Solution',
    'Scalable Cloud Solution',
    'Data Protection Services',
    'Optimization Management',
    'HelpDesk 360 Solutions',
    'Software Development',
    'Custom App Development',
    'It Infrastructure Networking',
    'Business Consulting'
  ];
}
