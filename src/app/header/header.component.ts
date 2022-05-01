import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() closeSidebar = new EventEmitter();

  constructor(public content: ContentService) { }

  ngOnInit(): void {
  }

}
