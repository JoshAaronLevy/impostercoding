import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2HeaderComponent } from './home2-header.component';

describe('Home2HeaderComponent', () => {
  let component: Home2HeaderComponent;
  let fixture: ComponentFixture<Home2HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home2HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home2HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
