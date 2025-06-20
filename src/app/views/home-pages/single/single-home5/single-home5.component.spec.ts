import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHome5Component } from './single-home5.component';

describe('SingleHome5Component', () => {
  let component: SingleHome5Component;
  let fixture: ComponentFixture<SingleHome5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleHome5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHome5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
