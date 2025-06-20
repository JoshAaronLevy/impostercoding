import { Component, inject, type OnDestroy, type OnInit } from '@angular/core';
import { Home2HeaderComponent } from "./components/home2-header/home2-header.component";
import { Home2HeroComponent } from "./components/home2-hero/home2-hero.component";
import { Home2AboutComponent } from "./components/home2-about/home2-about.component";
import { Home2WorkComponent } from "./components/home2-work/home2-work.component";
import { Home2ServicesComponent } from "./components/home2-services/home2-services.component";
import { Home2TestimonialComponent } from "./components/home2-testimonial/home2-testimonial.component";
import { Home2TeamComponent } from "./components/home2-team/home2-team.component";
import { Home2BlogsComponent } from "./components/home2-blogs/home2-blogs.component";
import { Home2CtaComponent } from "./components/home2-cta/home2-cta.component";
import { FooterComponent } from "@app/components/footer/footer.component";
import { FaviconService } from '@/core/services/favicon.service';

@Component({
    selector: 'app-home2',
    imports: [Home2HeaderComponent, Home2HeroComponent, Home2AboutComponent, Home2WorkComponent, Home2ServicesComponent, Home2TestimonialComponent, Home2TeamComponent, Home2BlogsComponent, Home2CtaComponent, FooterComponent],
    templateUrl: './home2.component.html',
    styles: ``
})
export class Home2Component implements OnInit, OnDestroy {
    private faviconService = inject(FaviconService)

    ngOnInit(): void {
        this.faviconService.setFavicon('assets/img/logo/fav-logo2.png');
    }
    ngOnDestroy(): void {
        this.faviconService.setFavicon('assets/img/logo/fav-logo1.png');
    }
}
