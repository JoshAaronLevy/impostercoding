import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2TestimonialComponent } from './home2-testimonial.component';

describe('Home2TestimonialComponent', () => {
  let component: Home2TestimonialComponent;
  let fixture: ComponentFixture<Home2TestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home2TestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home2TestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
