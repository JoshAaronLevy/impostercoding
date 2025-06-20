import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2HeroComponent } from './home2-hero.component';

describe('Home2HeroComponent', () => {
  let component: Home2HeroComponent;
  let fixture: ComponentFixture<Home2HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home2HeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home2HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
