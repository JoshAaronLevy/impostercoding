import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHeader5Component } from './single-header5.component';

describe('SingleHeader5Component', () => {
  let component: SingleHeader5Component;
  let fixture: ComponentFixture<SingleHeader5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleHeader5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHeader5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
