import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss'],
})
export class CookieBannerComponent {
  showBanner = signal(false);

  constructor() {
    const consent = localStorage.getItem('cookieConsent');
    const timestamp = localStorage.getItem('cookieConsentTimestamp');

    if (!consent || !timestamp || this.isExpired(timestamp)) {
      this.showBanner.set(true);
    }
  }

  private isExpired(timestamp: string): boolean {
    const oneYear = 1000 * 60 * 60 * 24 * 365;
    const saved = new Date(parseInt(timestamp, 10));
    return Date.now() - saved.getTime() > oneYear;
  }

  private saveConsent(value: string) {
    localStorage.setItem('cookieConsent', value);
    localStorage.setItem('cookieConsentTimestamp', Date.now().toString());
    this.showBanner.set(false);
  }

  accept() {
    this.saveConsent('accepted');
  }

  decline() {
    this.saveConsent('declined');
  }

  dismiss() {
    this.saveConsent('dismissed');
  }
}
