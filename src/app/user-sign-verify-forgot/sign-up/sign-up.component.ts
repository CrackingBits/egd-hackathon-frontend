import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  readonly title = 'Registrace';

  constructor(
    public authService: AuthService,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.setSubTitle(this.title);
  }
}
