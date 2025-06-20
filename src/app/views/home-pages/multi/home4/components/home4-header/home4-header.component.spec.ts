import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4HeaderComponent } from './home4-header.component';

describe('Home4HeaderComponent', () => {
  let component: Home4HeaderComponent;
  let fixture: ComponentFixture<Home4HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home4HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home4HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
