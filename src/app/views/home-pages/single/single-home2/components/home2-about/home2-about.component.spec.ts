import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2AboutComponent } from './home2-about.component';

describe('Home2AboutComponent', () => {
  let component: Home2AboutComponent;
  let fixture: ComponentFixture<Home2AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home2AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home2AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
