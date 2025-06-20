import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHome2Component } from './single-home2.component';

describe('SingleHome2Component', () => {
  let component: SingleHome2Component;
  let fixture: ComponentFixture<SingleHome2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleHome2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
