import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'iGA';

  dayColor = 'linear-gradient(0deg, rgba(255, 255, 255, 1) 12.98%, rgba(144, 169, 245, 1) 84.86%)';
  noonColor = 'linear-gradient(0deg, rgba(255, 116, 68, 1) 6.39%, rgba(249, 133, 82, 1) 11.55%, rgba(241, 157, 100, 1) 20.42%, rgba(236, 171, 111, 1) 28.69%, rgba(234, 176, 115, 1) 35.72%, rgba(207, 168, 143, 1) 47.17%, rgba(140, 148, 213, 1) 71.74%, rgba(127, 144, 226, 1) 76.12%)'

  constructor(private elementRef: ElementRef) {


  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
      .body.style.background = this.noonColor;

    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundSize = "100% 100%";

    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundRepeat = "no-repeat";

    /* this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundImage = "" */
  }
}
