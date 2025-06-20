import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2TeamComponent } from './home2-team.component';

describe('Home2TeamComponent', () => {
  let component: Home2TeamComponent;
  let fixture: ComponentFixture<Home2TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home2TeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home2TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
