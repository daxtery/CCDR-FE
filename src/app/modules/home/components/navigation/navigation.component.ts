import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  background = 'none';

  constructor(private authService: AuthService, private router: Router) {

    router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {

      this.applyBackground(event.url)

    });
  }

  ngOnInit(): void {

    this.applyBackground(this.router.url)
  }

  isLoggedIn() {

    return this.authService.is_logged_in();
  }

  applyBackground(url: string) {

    this.background = 'none'

    if (url != '/home' && url != '/home/login')
      this.background = 'linear-gradient(0deg, rgba(255, 255, 255, 1) 0.32%, rgba(251, 252, 255, 1) 1.4%, rgba(218, 226, 252, 1) 11.21%, rgba(191, 205, 249, 1) 21.79%, rgba(170, 189, 247, 1) 33.26%, rgba(155, 178, 246, 1) 46.04%, rgba(147, 171, 245, 1) 61.22%, rgba(144, 169, 245, 1) 84.86%)'

  }

}
