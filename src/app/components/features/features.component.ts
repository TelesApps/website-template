import { Component, Input, OnInit } from '@angular/core';
import { Feature } from 'src/app/interfaces/feature.interface';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  @Input() useMatCard: boolean = false;
  @Input() featureTitle: string = '';
  @Input() featureSubtitle: string = '';
  @Input() features: Array<Feature> = []
  constructor() { }

  ngOnInit(): void {
  }

}
