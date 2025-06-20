import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home5FaqComponent } from './home5-faq.component';

describe('Home5FaqComponent', () => {
  let component: Home5FaqComponent;
  let fixture: ComponentFixture<Home5FaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home5FaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home5FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
