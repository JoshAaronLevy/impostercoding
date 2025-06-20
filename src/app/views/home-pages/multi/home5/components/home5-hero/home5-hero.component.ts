import { GsapRevealDirective } from '@/core/directives/gsap-reveal.directive';
import { Component, inject, ViewChild, type TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home5-hero',
  imports: [NgbModalModule,RouterLink,GsapRevealDirective],
  templateUrl: './home5-hero.component.html',
  styles: ``
})
export class Home5HeroComponent {
 @ViewChild('videoModal') videoModalRef!: TemplateRef<any>;

    private modalService = inject(NgbModal)

    openVideoModal() {
        this.modalService.open(this.videoModalRef, { centered: true, size: 'lg' });
    }
}
