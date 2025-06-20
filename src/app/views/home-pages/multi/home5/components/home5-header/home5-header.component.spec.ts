import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home5HeaderComponent } from './home5-header.component';

describe('Home5HeaderComponent', () => {
  let component: Home5HeaderComponent;
  let fixture: ComponentFixture<Home5HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home5HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home5HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
