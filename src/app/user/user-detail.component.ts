import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TitleService } from 'src/app/shared/services/title.service';
import { AuthApiService } from '../api-swagger/services/auth-api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  readonly title = 'Detail uživatele';

  constructor(
    public authService: AuthService,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.setSubTitle(this.title);
  }
}
