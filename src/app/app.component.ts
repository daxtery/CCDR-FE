import { Component, HostListener } from '@angular/core';
import { FeedbackService } from './core/services/feedback.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'iGA';

  constructor() {

  }

  ngOnInit(): void {
    
  }
}
