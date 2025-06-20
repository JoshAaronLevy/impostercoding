import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home3HeaderComponent } from './home3-header.component';

describe('Home3HeaderComponent', () => {
  let component: Home3HeaderComponent;
  let fixture: ComponentFixture<Home3HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home3HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home3HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
