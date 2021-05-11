import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../service/news-api.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  public topHeadingsDisplay:any = [];

  constructor(
    private _newsService: NewsApiService
  ) { }

  ngOnInit(): void {
    this.getNews();
  }

  public getNews(){

    this._newsService.topHeadings().subscribe(
      res => {
        console.log(res);

        if (res.status == 'ok') {

          for (let i = 0; i < res.articles.length; i++) {
            console.log(i);
            if (res.articles[i].urlToImage != null) {
              console.log("con Imagen");
              this.topHeadingsDisplay.push(res.articles[i]);
            } else {
              console.log('Sin imagen');
            }
          }
        }
        
      },
      error =>{
        console.log(error);
      }
    );

  }

}
