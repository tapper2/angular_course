import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiService implements OnInit {

  public loading = false;
  public baseURL = "http://www.omdbapi.com/?apikey=d77eb704&"
  constructor(private http: HttpClient) { }


  ngOnInit() {

  }

  getAllMovies(url) {
    return new Promise(async (resolve, reject) => {
      try {
        await this.http.get(this.baseURL + '' + url).subscribe(data => { resolve(data); });
      } catch (err) {
        console.log(err);
      } finally {
      }
    });
  }
}
