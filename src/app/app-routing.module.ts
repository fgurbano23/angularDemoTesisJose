import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {ArticleComponent} from './modules/article/article.component';

const routes:Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'article',
    component:ArticleComponent
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule {
}
