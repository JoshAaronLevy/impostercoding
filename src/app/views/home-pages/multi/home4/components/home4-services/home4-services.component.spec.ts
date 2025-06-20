import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4ServicesComponent } from './home4-services.component';

describe('Home4ServicesComponent', () => {
  let component: Home4ServicesComponent;
  let fixture: ComponentFixture<Home4ServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home4ServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home4ServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
