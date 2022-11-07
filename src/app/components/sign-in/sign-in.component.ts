import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  readonly title = 'Přihlášení';

  constructor(
    public authService: AuthService,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.setSubTitle(this.title);
  }
}
