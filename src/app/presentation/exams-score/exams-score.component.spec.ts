import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExamsScoreComponent } from './exams-score.component';

describe('ExamsScoreComponent', () => {
  let component: ExamsScoreComponent;
  let fixture: ComponentFixture<ExamsScoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamsScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
