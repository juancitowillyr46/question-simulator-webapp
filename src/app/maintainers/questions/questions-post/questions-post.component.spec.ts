import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuestionsPostComponent } from './questions-post.component';

describe('QuestionsPostComponent', () => {
  let component: QuestionsPostComponent;
  let fixture: ComponentFixture<QuestionsPostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
