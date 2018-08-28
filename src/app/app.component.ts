import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogin = true;
  title = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/home']);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title = this.getPaginationName(event.url);
      }
    });
    this.title = 'Statistiques';
  }

  getPaginationName(url: string) {
    switch (url) {
      case '/admin':
        return 'Statistiques';
      case '/asset':
        return 'Assets';
      case '/user':
        return 'Users';
      case '/totem':
        return 'Totems';
      case '/game':
        return 'Games';
      case '/achievement':
        return 'Achievements';
      case '/prize':
        return 'Prize';
      case '/add-prize':
        return 'Prize > Add Prize';
      default:
        return 'Achievement > Manage';
    }
  }
}
