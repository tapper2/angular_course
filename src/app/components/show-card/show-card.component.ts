import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.scss']
})
export class ShowCardComponent implements OnInit {
  @Input() show;

  constructor() { }

  ngOnInit() {
    console.log("Show : ", this.show)
  }

}
