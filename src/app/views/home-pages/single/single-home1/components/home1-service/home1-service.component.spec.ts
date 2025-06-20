import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1ServiceComponent } from './home1-service.component';

describe('Home1ServiceComponent', () => {
  let component: Home1ServiceComponent;
  let fixture: ComponentFixture<Home1ServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home1ServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
