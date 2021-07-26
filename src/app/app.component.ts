import { Component, HostListener } from '@angular/core';
import { FeedbackService } from './core/services/feedback.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'CCDR-FE';

  constructor(private feedbackService: FeedbackService) {
  }

  // Note: This is so we give feedback to the user when they close the window.
  @HostListener('window:unload', ['$event'])
  unloadHandler(_event) {
    this.feedbackService.sendFeedBack();
  }
}
