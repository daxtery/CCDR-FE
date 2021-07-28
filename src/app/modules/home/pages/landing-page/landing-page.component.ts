import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  timeOfDay: string;

  ngOnInit(): void {

    const hour = new Date().getHours();

    if (hour >= 5 && hour < 11) this.timeOfDay = 'morning';
    if (hour >= 11 && hour < 17) this.timeOfDay = 'noon';
    if (hour >= 17 && hour < 23) this.timeOfDay = 'noon';
    if (hour >= 23 && hour < 5) this.timeOfDay = 'night';
  }

}
