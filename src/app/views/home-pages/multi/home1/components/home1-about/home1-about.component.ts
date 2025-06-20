import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-home1-about',
  imports: [GsapRevealDirective,NgCircleProgressModule,RouterLink],
  templateUrl: './home1-about.component.html',
  styles: ``
})
export class Home1AboutComponent {

}
