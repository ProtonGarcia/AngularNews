import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  public newsUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3989d3fec1ff48f8a61334226a388368";
  public techUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=3989d3fec1ff48f8a61334226a388368";

  constructor(
    private _http: HttpClient
  ) {
    //this.newsUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3989d3fec1ff48f8a61334226a388368";
  }

  public topHeadings(): Observable<any> {

    return this._http.get(this.newsUrl);
  } 

  public techNews(): Observable<any>{
    return this._http.get(this.techUrl);
  }
}
