import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { LandingMediaComponent } from '../components/landing-media/landing-media.component';



@NgModule({
  declarations: [
    HomePageComponent,
    LandingMediaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
