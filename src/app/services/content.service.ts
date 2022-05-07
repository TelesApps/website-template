import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Feature } from '../interfaces/feature.interface';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  // These variables are defined in styles.scss. They must be changed there and matched here.
  $mediaXLgDesktopWidth = 1901;
  $mediaLaptopWidth = 1200;
  $mediaTabletWidth = 1024;
  $mediaSmTabletWidth = 768;
  $mediaMobileWidth = 480;
  $mediaSmMobileWidth = 320;

  public screenWidthSubj: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  public readonly logoImgSmall: string = 'https://dummyimage.com/150x100/000/fff'
  public readonly headerNavItems: Array<string> = ['Home', 'About', 'Contact Us']
  public readonly landingMediaBackground = `https://image.shutterstock.com/z/stock-photo--d-rendering-of-a-modern-villa-project-in-different-stages-of-completion-1793908093.jpg`
  public readonly featuresTitle: string = 'Service You Can Trust'
  public readonly featuresSubtitle: string = `We pride ourselves in building meaningfull relationships with our client by
  delivering what you need when you need it`
  public readonly features: Array<Feature> = [
    {
      matIcon: 'home',
      iconColorHex: '#076b18',
      title: 'Own your source code',
      description: `We believe that it is wrong to use our position as authors of your code to make it difficult or 
      impossible for you to use a competitor to pick up where we left off. The code is yours; we just write it. `
    },
    {
      matIcon: 'close',
      iconColorHex: '#bf2121',
      title: 'Don’t reinvent the wheel ',
      description: `Do you really need to create your own tool? You may not need us as much as you think, 
      and we’re not afraid to say it! The Autodesk tool set is enormous and potentially overwhelming. 
      As we review your idea, we will not shy away from showing you tools and services that potentially 
      accomplish your goal and may already be at your disposal. `
    },
  ]
  constructor() { }
}
