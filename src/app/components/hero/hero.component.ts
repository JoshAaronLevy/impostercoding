import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {
  @Input() title: string = '';
}
