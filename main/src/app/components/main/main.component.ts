import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  show:boolean = false;
  num : number = 0;
  b : boolean = true;
  nums:Array<number> = [];
  

  s:number;
  shows:Array<boolean> = [true,true,true,true]
  constructor() {
    let num :number = 20;
    num=30;
    this.num = 40
    console.log(this.num , num)
   // let s:number = this.sum(10,20)
    // console.log("s : " , s)
   }

   changeNumber(value)
   {
     this.num = value;
     console.log("Num : " , this.num)
   }

   sum(a,b){
     console.log(a)
     this.s = a+b;
     return a+b;
   }

   showBox(i)
   {
     this.shows[i] = !this.shows[i];
   }

  ngOnInit() {
    
  }



}
