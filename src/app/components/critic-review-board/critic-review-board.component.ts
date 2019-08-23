import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-critic-review-board',
  templateUrl: './critic-review-board.component.html',
  styleUrls: ['./critic-review-board.component.css']
})
export class CriticReviewBoardComponent implements OnInit {
  @Input() reviewData : { reviewTitle:string, reviewList:Array<any> };
  constructor() { }

  ngOnInit() {
  }

}
