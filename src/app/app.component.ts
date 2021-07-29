import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'iGA';


  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {

  }
}
