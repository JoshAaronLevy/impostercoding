import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home5WorkComponent } from './home5-work.component';

describe('Home5WorkComponent', () => {
  let component: Home5WorkComponent;
  let fixture: ComponentFixture<Home5WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home5WorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home5WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
