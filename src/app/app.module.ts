import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NewsApiService } from './service/news-api.service';

import { HttpClientModule } from '@angular/common/http';
import { TechnewsComponent } from './components/technews/technews.component';
import { TopHeadingComponent } from './components/top-heading/top-heading.component';

// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';


@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    TechnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [
    NewsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
