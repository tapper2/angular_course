import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-omdb',
  templateUrl: './omdb.component.html',
  styleUrls: ['./omdb.component.scss']
})
export class OmdbComponent implements OnInit {
  num:number;
  movies:any;
  inMovie:boolean = false;
  currentMovie:object;
  search:string = "";

  constructor(public api: ApiService) {
    this.getAllMovies();
    this.num = this.api.sum(3,9);
  }

  async getAllMovies() {
    this.movies = await this.api.getAllMovies("s="+this.search);
    this.movies = this.movies['Search'];
    console.log("MOVIES : ", this.movies)
  }

  changeInMovie(movie){
    console.log("InMovie")
    this.currentMovie = movie
    this.inMovie = !this.inMovie;
  }

  ngOnInit() {
  }

}
