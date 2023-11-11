import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FoodService } from './services/food/food.service';
import { RatingModule } from 'ng-starrating';
RouterModule
RatingModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule
    
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
