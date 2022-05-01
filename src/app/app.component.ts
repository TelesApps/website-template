import { Component, HostListener, OnInit } from '@angular/core';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'template-angular-material-website';
  public screenWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.content.screenWidthSubj.next(this.screenWidth);
  }

  constructor(public content: ContentService) {
    this.screenWidth = window.innerWidth;
    this.content.screenWidthSubj.next(this.screenWidth);
  }

  ngOnInit(): void {
    this.content.screenWidthSubj.next(this.screenWidth);
  }


}
