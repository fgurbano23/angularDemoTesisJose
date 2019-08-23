import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bulletin-board',
  templateUrl: './bulletin-board.component.html',
  styleUrls: ['./bulletin-board.component.css']
})
export class BulletinBoardComponent implements OnInit {
  @Input() bulletinBoard : {titleBoard:string, bulletinList:Array<any>};

  constructor() { }

  ngOnInit() {
  }

}
