import { Component, inject, type OnDestroy, type OnInit } from '@angular/core';
import { FooterComponent } from "@app/components/footer/footer.component";
import { Home5About2Component } from "./components/home5-about-2/home5-about-2.component";
import { Home5AboutComponent } from "./components/home5-about/home5-about.component";
import { Home5CtaComponent } from "./components/home5-cta/home5-cta.component";
import { Home5FaqComponent } from "./components/home5-faq/home5-faq.component";
import { Home5HeaderComponent } from "./components/home5-header/home5-header.component";
import { Home5HeroComponent } from "./components/home5-hero/home5-hero.component";
import { Home5ServicesComponent } from "./components/home5-services/home5-services.component";
import { Home5TestimonialComponent } from "./components/home5-testimonial/home5-testimonial.component";
import { Home5WorkComponent } from "./components/home5-work/home5-work.component";
import { FaviconService } from '@/core/services/favicon.service';

@Component({
  selector: 'app-home5',
  imports: [Home5HeaderComponent, Home5HeroComponent, Home5WorkComponent, Home5AboutComponent, Home5ServicesComponent, Home5About2Component, Home5TestimonialComponent, Home5FaqComponent, Home5CtaComponent, FooterComponent],
  templateUrl: './home5.component.html',
  styles: ``
})
export class Home5Component implements OnInit, OnDestroy {
    private faviconService = inject(FaviconService)

    ngOnInit(): void {
        this.faviconService.setFavicon('assets/img/logo/fav-logo4.png');
    }
    ngOnDestroy(): void {
        this.faviconService.setFavicon('assets/img/logo/fav-logo1.png');
    }
}
