import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UsersIndexComponent } from './users-index.component';

describe('UsersIndexComponent', () => {
  let component: UsersIndexComponent;
  let fixture: ComponentFixture<UsersIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
