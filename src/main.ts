import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ApplicationConfig, APP_CONFIG, CONFIG_FILENAME } from './app/shared/models/app-config';
import { environment } from './environments/environment';

fetch(CONFIG_FILENAME)
  .then((res) => res.json())
  .then((config) => {

    let applicationConfiguration = new ApplicationConfig(config);

    if (environment.production) {
      enableProdMode();
    }

    platformBrowserDynamic([{ provide: APP_CONFIG, useValue: applicationConfiguration }])
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  })
  .catch((error) => {
    console.error(
      `Error loading config '${CONFIG_FILENAME}', using default config object`,
      error
    );
  });
