import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  @Input() asideData : { title:string, asideList:Array<any>};

  constructor() { }

  ngOnInit() {
  }

}
