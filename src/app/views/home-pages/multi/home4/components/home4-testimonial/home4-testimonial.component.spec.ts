import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4TestimonialComponent } from './home4-testimonial.component';

describe('Home4TestimonialComponent', () => {
  let component: Home4TestimonialComponent;
  let fixture: ComponentFixture<Home4TestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home4TestimonialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home4TestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
