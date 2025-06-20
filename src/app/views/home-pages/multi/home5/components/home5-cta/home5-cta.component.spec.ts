import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home5CtaComponent } from './home5-cta.component';

describe('Home5CtaComponent', () => {
  let component: Home5CtaComponent;
  let fixture: ComponentFixture<Home5CtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home5CtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home5CtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
