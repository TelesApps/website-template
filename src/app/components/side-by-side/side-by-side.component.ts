import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-side-by-side',
  templateUrl: './side-by-side.component.html',
  styleUrls: ['./side-by-side.component.scss']
})
export class SideBySideComponent implements OnInit {

  @Input() isLeftImg: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
