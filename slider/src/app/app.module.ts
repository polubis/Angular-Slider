import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { SliderDirective } from "src/app/slider/slider.directive";
import { SlideDirective } from "src/app/slider/slide.directive";

@NgModule({
  declarations: [
    AppComponent,
    SliderDirective,
    SlideDirective, 
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
