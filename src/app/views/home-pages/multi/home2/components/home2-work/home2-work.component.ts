import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home2-work',
  imports: [RouterLink,GsapRevealDirective],
  templateUrl: './home2-work.component.html',
  styles: ``
})
export class Home2WorkComponent {

}
