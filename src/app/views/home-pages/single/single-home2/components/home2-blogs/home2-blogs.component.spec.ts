import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2BlogsComponent } from './home2-blogs.component';

describe('Home2BlogsComponent', () => {
  let component: Home2BlogsComponent;
  let fixture: ComponentFixture<Home2BlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home2BlogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home2BlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
