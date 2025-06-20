import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home2-about',
   host: { 'data-component-id': 'home2-about-instance' },
  imports: [GsapRevealDirective],
  templateUrl: './home2-about.component.html',
  styles: ``
})
export class Home2AboutComponent {

}
