import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHome4Component } from './single-home4.component';

describe('SingleHome4Component', () => {
  let component: SingleHome4Component;
  let fixture: ComponentFixture<SingleHome4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleHome4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHome4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
