import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialEditComponent } from './testimonial-edit.component';

describe('TestimonialEditComponent', () => {
  let component: TestimonialEditComponent;
  let fixture: ComponentFixture<TestimonialEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
