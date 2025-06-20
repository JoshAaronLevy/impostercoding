import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home4BlogsComponent } from './home4-blogs.component';

describe('Home4BlogsComponent', () => {
  let component: Home4BlogsComponent;
  let fixture: ComponentFixture<Home4BlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home4BlogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home4BlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
