import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4AboutComponent } from './home4-about.component';

describe('Home4AboutComponent', () => {
  let component: Home4AboutComponent;
  let fixture: ComponentFixture<Home4AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home4AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home4AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
