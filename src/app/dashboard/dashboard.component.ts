import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  readonly title = 'Dashboard';

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setSubTitle(this.title);
  }
}
