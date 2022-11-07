import { Inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApplicationConfig, APP_CONFIG } from '../models/app-config';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(
    private titleService: Title,
    @Inject(APP_CONFIG) private applicationConfig: ApplicationConfig
  ) {}

  setSubTitle(subTitle: string) {
    let mainTitle = this.applicationConfig.appTitle;

    if (subTitle.length > 0) {
      mainTitle = subTitle + ' - ' + mainTitle;
    }

    if (this.applicationConfig.envNameUC) {
      mainTitle = `[${this.applicationConfig.envNameUC}] ${mainTitle}`;
    }

    this.titleService.setTitle(mainTitle);
  }
}
