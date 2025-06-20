import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home5HeroComponent } from './home5-hero.component';

describe('Home5HeroComponent', () => {
  let component: Home5HeroComponent;
  let fixture: ComponentFixture<Home5HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home5HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home5HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
