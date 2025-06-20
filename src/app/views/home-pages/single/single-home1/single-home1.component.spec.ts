import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHome1Component } from './single-home1.component';

describe('SingleHome1Component', () => {
  let component: SingleHome1Component;
  let fixture: ComponentFixture<SingleHome1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleHome1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
