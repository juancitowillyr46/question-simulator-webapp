import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CategoriesPostComponent } from './categories-post.component';

describe('CategoriesPostComponent', () => {
  let component: CategoriesPostComponent;
  let fixture: ComponentFixture<CategoriesPostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
