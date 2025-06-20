import { Component, inject, ViewChild, type TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home1-hero',
  imports: [NgbModalModule,RouterLink],
  templateUrl: './home1-hero.component.html',
  styles: ``
})
export class Home1HeroComponent {
 @ViewChild('videoModal') videoModalRef!: TemplateRef<any>;

    private modalService = inject(NgbModal)

    openVideoModal() {
        this.modalService.open(this.videoModalRef, { centered: true, size: 'lg' });
    }
}
