import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  background = ''

  morningBackground = 'url(../../assets/background/background-morning.svg) no-repeat'
  dayBackground = 'url(../../assets/background/background-day.svg) no-repeat'
  noonBackground = 'url(../../assets/background/background-noon.svg) no-repeat'
  nightBackground = 'url(../../assets/background/background-night.svg) no-repeat'

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) this.background = this.morningBackground;
    if (hour >= 12 && hour < 17) this.background = this.dayBackground;
    if (hour >= 17 && hour < 22) this.background = this.noonBackground;
    if (hour >= 22 && hour < 5) this.background = this.nightBackground;
  }

  ngAfterViewInit() {

    this.elementRef.nativeElement.ownerDocument
      .body.style.background = this.background;

    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundSize = "cover";

    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundPosistion ='center center';
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.ownerDocument
      .body.style.background = 'none';
  }

}
