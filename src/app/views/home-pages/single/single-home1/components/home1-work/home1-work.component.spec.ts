import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1WorkComponent } from './home1-work.component';

describe('Home1WorkComponent', () => {
  let component: Home1WorkComponent;
  let fixture: ComponentFixture<Home1WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home1WorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
