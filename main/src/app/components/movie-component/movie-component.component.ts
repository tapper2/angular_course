import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.scss']
})
export class MovieComponentComponent implements OnInit {
  @Input() movie;
  @Output() changeInMovieFN = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  goBack(){
    this.changeInMovieFN.emit(this.movie)
  }

}
