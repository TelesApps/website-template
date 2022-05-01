import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  public readonly landingMediaBackground = 'https://image.shutterstock.com/z/stock-photo--d-rendering-of-a-modern-villa-project-in-different-stages-of-completion-1793908093.jpg'

  constructor() { }
}
