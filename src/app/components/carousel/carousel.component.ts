import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
  @Input() carouselData: Array<any>;

  constructor() {}

  ngOnInit() {
    console.log(this.carouselData);
  }

}
