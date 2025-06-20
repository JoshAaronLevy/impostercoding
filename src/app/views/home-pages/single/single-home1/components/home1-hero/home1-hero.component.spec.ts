import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1HeroComponent } from './home1-hero.component';

describe('Home1HeroComponent', () => {
  let component: Home1HeroComponent;
  let fixture: ComponentFixture<Home1HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home1HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
