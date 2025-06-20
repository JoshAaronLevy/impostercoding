import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home5About2Component } from './home5-about-2.component';

describe('Home5About2Component', () => {
  let component: Home5About2Component;
  let fixture: ComponentFixture<Home5About2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home5About2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home5About2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
