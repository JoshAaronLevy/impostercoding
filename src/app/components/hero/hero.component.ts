import { Component, inject, ViewChild, type TemplateRef } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero',
  imports: [ NgbModalModule ],
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {
  @ViewChild('videoModal') videoModalRef!: TemplateRef<any>;

  private modalService = inject(NgbModal)

  openVideoModal() {
    this.modalService.open(this.videoModalRef, { centered: true, size: 'lg' });
  }
}
