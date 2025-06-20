import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4CtaComponent } from './home4-cta.component';

describe('Home4CtaComponent', () => {
  let component: Home4CtaComponent;
  let fixture: ComponentFixture<Home4CtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home4CtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home4CtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
