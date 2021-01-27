import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExamsEnabledComponent } from './exams-enabled.component';

describe('ExamsEnabledComponent', () => {
  let component: ExamsEnabledComponent;
  let fixture: ComponentFixture<ExamsEnabledComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamsEnabledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsEnabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
