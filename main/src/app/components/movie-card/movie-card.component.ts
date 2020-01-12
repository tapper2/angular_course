import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movieObj;
  @Output() changeInMovieFN = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  movieClicked(){
    console.log("Click")
    this.changeInMovieFN.emit(this.movieObj);
  }

}
