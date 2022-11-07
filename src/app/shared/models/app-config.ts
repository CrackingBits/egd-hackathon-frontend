import { InjectionToken } from "@angular/core";
import { FirebaseOptions } from "firebase/app";
import { environment } from "src/environments/environment";

export interface AppConfigF {
  configName: string;
  debug: boolean;
  envName: string;
}

export interface AppConfig {
  configName: string;
  debug: boolean;
  envName: string;
}

export interface EnvironmentSettings {
  production: boolean; // production build, not production environment
}

export const APP_TITLE = 'Hackaference 2022 (Cracking Bits)';
export const CONFIG_FILENAME = '/assets/app-config.json';
export const APP_CONFIG = new InjectionToken<AppConfig>("app.config");

const DEFAULT_CONFIG: AppConfig = {
  configName: 'configService',
  debug: false,
  envName: ''
};

declare var require: (filename: string) => any;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {
  name: appName,
  version: appVersion,
} = require('../../../../package.json');

export class ApplicationConfig {
  private fullConfig: AppConfig[];
  private appConfig = DEFAULT_CONFIG;

  constructor(completeConfig: AppConfig[]) {
    this.fullConfig = completeConfig;
    this.parseJsonConfig(this.fullConfig);
  }

  private parseJsonConfig(data: any) {
    let additionalInfo = '';
    const hostname = window.location.hostname
      ? window.location.hostname.toLowerCase()
      : '';

    // eslint-disable-next-line no-console
    console.log(
      '%c' + this.appTitleAndVersion,
      'background: #03a9f4; color: #fff'
    );

    if (data == null) {
      console.error('Empty appConfig array');
      return;
    }

    if (data[hostname]) {
      additionalInfo = `'${hostname}' config found`;
      this.appConfig = data[hostname];
      // eslint-disable-next-line @typescript-eslint/dot-notation
    } else if (data['default']) {
      additionalInfo = `Default 'default' config found`;
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.appConfig = data['default'];
    } else {
      additionalInfo = `No config found, using default config object`;
      this.appConfig = DEFAULT_CONFIG;
    }

    this.prepAppByConfig();
    console.debug(additionalInfo);

    // eslint-disable-next-line no-console
    console.log(' ', this.appConfig);
  }

  private prepAppByConfig() {
    if (this.appConfig.debug) {
      console.debug = (() => {
        const context = 'DEBUG:';
        // eslint-disable-next-line no-console
        return Function.prototype.bind.call(console.log, console, context);
      })();
    } else {
      console.debug = (...args) => {};
    }
  }

  get productionMode(): boolean {
    return environment.production;
  }

  get firebase(): FirebaseOptions {
    return environment.firebase;
  }

  get debug(): boolean {
    return this.appConfig.debug;
  }

  get envNameUC(): string {
    return this.appConfig.envName.toLocaleUpperCase();
  }

  get appName(): string {
    return appName;
  }

  get appTitle(): string {
    return APP_TITLE;
  }

  get appVersion(): string {
    return appVersion;
  }

  get appTitleAndVersion(): string {
    return `${this.appTitle} v${this.appVersion}`;
  }

  get appEnvUCAndTitle(): string {
    return this.envNameUC
      ? `[${this.envNameUC.toLocaleUpperCase()}] ${this.appTitle}`
      : this.appTitle;
  }

  get appEnvUCAndTitleAndVersion(): string {
    return `${this.appEnvUCAndTitle} v${this.appVersion}`;
  }

  get appFooter(): string {
      return `\u00A92022 Cracking Bits s.r.o. / ${this.appName} v${this.appVersion}`;
  }
}
