import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  readonly title = 'Ověření e-mailu';

  constructor(
    public authService: AuthService,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.setSubTitle(this.title);
  }
}
