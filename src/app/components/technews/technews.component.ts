import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../service/news-api.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  public techNewsDisplay: any = [];

  constructor(
    private _newsService: NewsApiService
  ) { }

  ngOnInit(): void {
    this.techNews();
  }

  public techNews() {

    this._newsService.techNews().subscribe(
      res => {

        if (res.status == 'ok') {

          for (let i = 0; i < res.articles.length; i++) {
            console.log(i);
            if (res.articles[i].urlToImage != null) {
              console.log("con Imagen");
              this.techNewsDisplay.push(res.articles[i]);
            } else {
              console.log('Sin imagen');
            }
          }
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
