import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonalListComponent } from './testimonal-list.component';

describe('TestimonalListComponent', () => {
  let component: TestimonalListComponent;
  let fixture: ComponentFixture<TestimonalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
