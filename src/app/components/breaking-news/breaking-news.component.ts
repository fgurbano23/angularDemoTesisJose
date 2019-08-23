import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.css']
})
export class BreakingNewsComponent implements OnInit {
  @Input() breakingNews: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
