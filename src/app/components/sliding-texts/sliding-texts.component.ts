import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-sliding-texts',
  templateUrl: './sliding-texts.component.html',
  styleUrls: ['./sliding-texts.component.scss']
})

export class SlidingTextsComponent implements OnInit, AfterViewInit {

  @ViewChild('content', {static: false}) private testDiv?: ElementRef<HTMLDivElement>;
  isTestDivScrolledIntoView: boolean = false

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView(){
    if (this.testDiv){
      const rect = this.testDiv.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isTestDivScrolledIntoView = topShown && bottomShown;
    }
    console.log('isVIsible', this.isTestDivScrolledIntoView);
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log('isVIsible', this.isTestDivScrolledIntoView);
    }, 2000);
  }

  isHidden(el: any) {
    return (el.offsetParent === null)
}


}
