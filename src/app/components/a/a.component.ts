import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
  @Input() numsArray;
  @Output() changeNum = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increment(){
    // this.numsArray.push(this.numsArray.length+1);
    // console.log(this.numsArray)
    let n = Math.floor(Math.random()*100)
    this.changeNum.emit(n);
  }
}
