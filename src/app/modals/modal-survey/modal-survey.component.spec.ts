import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSurveyComponent } from './modal-survey.component';

describe('ModalSurveyComponent', () => {
  let component: ModalSurveyComponent;
  let fixture: ComponentFixture<ModalSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
