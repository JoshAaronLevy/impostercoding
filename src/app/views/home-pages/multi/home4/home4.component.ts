import { Component } from '@angular/core';
import { FooterComponent } from "@app/components/footer/footer.component";
import { Home4AboutComponent } from "./components/home4-about/home4-about.component";
import { Home4BlogsComponent } from "./components/home4-blogs/home4-blogs.component";
import { Home4CaseStudiesComponent } from "./components/home4-case-studies/home4-case-studies.component";
import { Home4CtaComponent } from "./components/home4-cta/home4-cta.component";
import { Home4HeaderComponent } from "./components/home4-header/home4-header.component";
import { Home4HeroComponent } from "./components/home4-hero/home4-hero.component";
import { Home4PricingComponent } from "./components/home4-pricing/home4-pricing.component";
import { Home4ServicesComponent } from "./components/home4-services/home4-services.component";
import { Home4TestimonialComponent } from "./components/home4-testimonial/home4-testimonial.component";
import { Home4WorkComponent } from "./components/home4-work/home4-work.component";

@Component({
  selector: 'app-home4',
  imports: [Home4HeaderComponent, Home4HeroComponent, Home4AboutComponent, Home4ServicesComponent, Home4WorkComponent, Home4CaseStudiesComponent, Home4PricingComponent, Home4TestimonialComponent, Home4BlogsComponent, Home4CtaComponent, FooterComponent],
  templateUrl: './home4.component.html',
  styles: ``
})
export class Home4Component {
 
}
