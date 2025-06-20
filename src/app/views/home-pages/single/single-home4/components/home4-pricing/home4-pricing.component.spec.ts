import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4PricingComponent } from './home4-pricing.component';

describe('Home4PricingComponent', () => {
  let component: Home4PricingComponent;
  let fixture: ComponentFixture<Home4PricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home4PricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home4PricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
