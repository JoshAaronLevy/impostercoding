import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4WorkComponent } from './home4-work.component';

describe('Home4WorkComponent', () => {
  let component: Home4WorkComponent;
  let fixture: ComponentFixture<Home4WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home4WorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home4WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
