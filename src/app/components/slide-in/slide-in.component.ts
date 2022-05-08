import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-slide-in',
  templateUrl: './slide-in.component.html',
  styleUrls: ['./slide-in.component.scss']
})

// #TODO EVENTUALLY USE ANGULAR ANIMATION FOR THIS COMPONENT, FOR NOW USING SCSS

export class SlideInComponent implements OnInit, AfterViewChecked {

  @ViewChild('container', { static: false }) private containerDiv?: ElementRef<HTMLDivElement>;
  @ViewChild('content', { static: false }) private contentDiv?: ElementRef<HTMLDivElement>;
  isInView: boolean = false
  @Input() direction: string = 'from-right';
  @Input() duration: string = '3s';
  @Input() delay: string = ''
  @Input() height: string = ''
  @Input() width: string = ''

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    let isVisible = false;
    if (this.containerDiv) {
      const rect = this.containerDiv.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      isVisible = topShown && bottomShown;
    }
    if (isVisible) this.isInView = true;
    this.setAnimationProperties();
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.setAnimationProperties();
  }

  setAnimationProperties() {
    if (this.contentDiv) {
      if (this.duration)
        this.contentDiv.nativeElement.style.animationDuration = this.duration;
      if (this.delay)
        this.contentDiv.nativeElement.style.animationDelay = this.delay;
    }
    if (this.containerDiv) {
      if (this.height)
        this.containerDiv.nativeElement.style.height = this.height;
      if (this.width)
        this.containerDiv.nativeElement.style.width = this.width;
    }
  }

  isHidden(el: any) {
    return (el.offsetParent === null)
  }


}
