import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-ng-if',
  templateUrl: './ng-for-ng-if.component.html',
  styleUrls: ['./ng-for-ng-if.component.scss']
})
export class NgForNgIfComponent implements OnInit {

  isBusy: boolean = false;
  cities: Array<string> = ['Tel-Aviv', 'Haifa', 'Eilat', 'Hadera', 'Ashdod'];
  SelectedCity: string = "";
  BoxColor: string = "blue";
  day: number = 3;

  constructor() { }

  ngOnInit() { }

  setSelectedCity(city) {
    this.SelectedCity = city;
  }

}
