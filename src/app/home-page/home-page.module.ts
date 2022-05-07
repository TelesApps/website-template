import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { LandingMediaComponent } from '../components/landing-media/landing-media.component';
import { SideBySideComponent } from '../components/side-by-side/side-by-side.component';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { SlideInComponent } from '../components/slide-in/slide-in.component';
import { FeaturesComponent } from '../components/features/features.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HomePageComponent,
    LandingMediaComponent,
    SideBySideComponent,
    SlideInComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ]
})
export class HomePageModule { }
