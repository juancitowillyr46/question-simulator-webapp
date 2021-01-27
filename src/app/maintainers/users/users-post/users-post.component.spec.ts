import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsersPostComponent } from './users-post.component';

describe('UsersPostComponent', () => {
  let component: UsersPostComponent;
  let fixture: ComponentFixture<UsersPostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
