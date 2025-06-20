import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2WorkComponent } from './home2-work.component';

describe('Home2WorkComponent', () => {
  let component: Home2WorkComponent;
  let fixture: ComponentFixture<Home2WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home2WorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home2WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
