import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { LandingMediaComponent } from '../components/landing-media/landing-media.component';
import { SideBySideComponent } from '../components/side-by-side/side-by-side.component';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { SlidingTextsComponent } from '../components/sliding-texts/sliding-texts.component';



@NgModule({
  declarations: [
    HomePageComponent,
    LandingMediaComponent,
    SideBySideComponent,
    SlidingTextsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule
  ]
})
export class HomePageModule { }
