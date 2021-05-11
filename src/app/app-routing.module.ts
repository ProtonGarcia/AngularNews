import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './components/technews/technews.component';
import { TopHeadingComponent } from './components/top-heading/top-heading.component';


const routes: Routes = [
  {path: '', component: TopHeadingComponent},
  {path: 'tech', component: TechnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
