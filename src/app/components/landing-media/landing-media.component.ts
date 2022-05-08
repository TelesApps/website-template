import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-landing-media',
  templateUrl: './landing-media.component.html',
  styleUrls: ['./landing-media.component.scss']
})
export class LandingMediaComponent implements OnInit {

  @Input() backgrounUrl: string = '';
  @Input() titleTxt: string = 'Main Text To Catch the Eye Here';
  @Input() titleSubTxt: string = 'A good Subtext Here to state your busineess mission'
  @Input() videoSource: string = '';
  
  constructor(public content: ContentService) { }

  ngOnInit(): void {
  }

}
