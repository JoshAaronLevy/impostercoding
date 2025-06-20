import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4HeroComponent } from './home4-hero.component';

describe('Home4HeroComponent', () => {
  let component: Home4HeroComponent;
  let fixture: ComponentFixture<Home4HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home4HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home4HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
