import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'iGA';

  background = ''

  morningBackground = 'url(../../assets/background/background-morning.svg) no-repeat'
  dayBackground = 'url(../../assets/background/background-day.svg) no-repeat'
  noonBackground = 'url(../../assets/background/background-noon.svg) no-repeat'
  nightBackground = 'url(../../assets/background/background-night.svg) no-repeat'

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 11) this.background = this.morningBackground;
    if (hour >= 11 && hour < 17) this.background = this.dayBackground;
    if (hour >= 17 && hour < 23) this.background = this.noonBackground;
    if (hour >= 0 && hour < 5) this.background = this.nightBackground;
  }

  ngAfterViewInit() {

    this.elementRef.nativeElement.ownerDocument
      .body.style.background = this.background;

    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundSize = "100%";

    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundPosistion ='center center';
  }
}
