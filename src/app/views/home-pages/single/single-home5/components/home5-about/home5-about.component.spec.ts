import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home5AboutComponent } from './home5-about.component';

describe('Home5AboutComponent', () => {
  let component: Home5AboutComponent;
  let fixture: ComponentFixture<Home5AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home5AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home5AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
