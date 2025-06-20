import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1AboutComponent } from './home1-about.component';

describe('Home1AboutComponent', () => {
  let component: Home1AboutComponent;
  let fixture: ComponentFixture<Home1AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home1AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
