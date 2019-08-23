import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticReviewBoardComponent } from './critic-review-board.component';

describe('CriticReviewBoardComponent', () => {
  let component: CriticReviewBoardComponent;
  let fixture: ComponentFixture<CriticReviewBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticReviewBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticReviewBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
