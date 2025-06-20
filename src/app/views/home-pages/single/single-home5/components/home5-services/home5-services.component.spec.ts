import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home5ServicesComponent } from './home5-services.component';

describe('Home5ServicesComponent', () => {
  let component: Home5ServicesComponent;
  let fixture: ComponentFixture<Home5ServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home5ServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home5ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
