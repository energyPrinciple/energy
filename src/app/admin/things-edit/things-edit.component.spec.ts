import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsEditComponent } from './things-edit.component';

describe('ThingsEditComponent', () => {
  let component: ThingsEditComponent;
  let fixture: ComponentFixture<ThingsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
