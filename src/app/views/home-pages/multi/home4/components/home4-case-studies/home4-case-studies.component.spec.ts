import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4CaseStudiesComponent } from './home4-case-studies.component';

describe('Home4CaseStudiesComponent', () => {
  let component: Home4CaseStudiesComponent;
  let fixture: ComponentFixture<Home4CaseStudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home4CaseStudiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home4CaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
