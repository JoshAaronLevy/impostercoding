import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home1-work',
  imports: [GsapRevealDirective,RouterLink],
  templateUrl: './home1-work.component.html',
  styles: ``
})
export class Home1WorkComponent {

}
