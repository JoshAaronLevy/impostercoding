import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home5TestimonialComponent } from './home5-testimonial.component';

describe('Home5TestimonialComponent', () => {
  let component: Home5TestimonialComponent;
  let fixture: ComponentFixture<Home5TestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home5TestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home5TestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
