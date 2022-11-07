import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationConfig, APP_CONFIG } from './shared/models/app-config';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(APP_CONFIG) public applicationConfig: ApplicationConfig,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    if (window.location.pathname === '/') {
      this.router.navigate(['/dashboard']);
    }
  }

  print() {
    window.print();
  }
}
