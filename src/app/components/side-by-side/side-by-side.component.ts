import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-side-by-side',
  templateUrl: './side-by-side.component.html',
  styleUrls: ['./side-by-side.component.scss']
})
export class SideBySideComponent implements OnInit {

  @Input() isLeftImg: boolean = true;
  @Input() imgSrc: string = 'https://image.shutterstock.com/z/stock-vector-architectural-wireframe-bim-design-d-illustration-1875530830.jpg';
  @Input() txtTitle: string = 'Building Information Modeling Development';
  @Input() subTitleTxt: string = `Have you ever thought to yourself “The Autodesk ecosystem is great, but I really wish it could do this
  one thing that is very specific to my company”? Well, it can!`
  constructor() { }

  ngOnInit(): void {
  }

}
