

import { NgModule } from '@angular/core';
import {Routes} from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { BulletinBoardComponent } from './components/bulletin-board/bulletin-board.component';

import { HomeComponent } from './modules/home/home.component';
import { PersonComponent } from './components/person/person.component';
import { CriticReviewBoardComponent } from './components/critic-review-board/critic-review-board.component';
import { AsideComponent } from './components/aside/aside.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BreakingNewsComponent } from './components/breaking-news/breaking-news.component';

const appRoutes: Routes = [
  {
    path:'user',
    component:PersonComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    BulletinBoardComponent,
    HomeComponent,
    CriticReviewBoardComponent,
    AsideComponent,
    CarouselComponent,
    BreakingNewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
