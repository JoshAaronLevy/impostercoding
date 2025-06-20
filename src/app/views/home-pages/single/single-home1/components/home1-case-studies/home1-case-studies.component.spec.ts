import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1CaseStudiesComponent } from './home1-case-studies.component';

describe('Home1CaseStudiesComponent', () => {
  let component: Home1CaseStudiesComponent;
  let fixture: ComponentFixture<Home1CaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home1CaseStudiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1CaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
