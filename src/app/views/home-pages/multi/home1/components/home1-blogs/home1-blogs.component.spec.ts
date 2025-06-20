import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1BlogsComponent } from './home1-blogs.component';

describe('Home1BlogsComponent', () => {
  let component: Home1BlogsComponent;
  let fixture: ComponentFixture<Home1BlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home1BlogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home1BlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
