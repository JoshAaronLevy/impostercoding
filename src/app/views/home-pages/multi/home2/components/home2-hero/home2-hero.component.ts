import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountUpModule } from 'ngx-countup';
@Component({
  selector: 'app-home2-hero',
  imports: [RouterLink,CountUpModule,GsapRevealDirective],
  templateUrl: './home2-hero.component.html',
  styles: ``
})
export class Home2HeroComponent {

}
