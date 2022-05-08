import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-side-by-side',
  templateUrl: './side-by-side.component.html',
  styleUrls: ['./side-by-side.component.scss']
})
export class SideBySideComponent implements OnInit {

  // #TODO this component need to be redone
  @Input() isLeftImg: boolean = true;
  @Input() imgSrc: string = '';
  @Input() txtTitle: string = 'Building Information Modeling Development';
  @Input() subTitleTxt: string = `Have you ever thought to yourself “The Autodesk ecosystem is great, but I really wish it could do this
  one thing that is very specific to my company”? Well, it can!`
  constructor() { }

  ngOnInit(): void {
  }

}
