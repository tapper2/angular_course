import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-omdb',
  templateUrl: './omdb.component.html',
  styleUrls: ['./omdb.component.scss']
})
export class OmdbComponent implements OnInit {

  constructor(public api: ApiService, private spinner: NgxSpinnerService) {
    this.getAllMovies();
  }

  async getAllMovies() {
    this.spinner.show();
    let movies = await this.api.getAllMovies("s=black");
    console.log("MOVIES : ", movies)
    this.spinner.hide();
  }

  ngOnInit() {
  }

}
