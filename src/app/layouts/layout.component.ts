import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { CookieBannerComponent } from '@app/components/cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderComponent, CookieBannerComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {}
