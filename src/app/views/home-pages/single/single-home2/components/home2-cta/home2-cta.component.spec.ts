import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2CtaComponent } from './home2-cta.component';

describe('Home2CtaComponent', () => {
  let component: Home2CtaComponent;
  let fixture: ComponentFixture<Home2CtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home2CtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home2CtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
