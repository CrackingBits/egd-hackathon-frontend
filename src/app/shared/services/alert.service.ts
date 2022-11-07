import { Injectable } from '@angular/core';
import notify from 'devextreme/ui/notify';

export function serverXErrorDecode(error: any): string {
  return error && error.headers && error.headers.get('X-Error')
    ? ' | ' +
        decodeURIComponent(error.headers.get('X-Error')).replace(/\+/gi, ' ')
    : '';
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  success(message: string) {
    notify({ message }, 'info', 5000);

    console.log(message);
  }

  fatal(message: string, errObj?: Error) {
    notify({ message }, 'error', 10000);

    message += serverXErrorDecode(errObj);
    console.error(message, errObj);
  }

  error(message: string, errObj?: Error) {
    notify({ message }, 'error', 10000);

    message += serverXErrorDecode(errObj);
    console.error(message, errObj);
  }

  errorNoToast(msg: string, errObj?: Error) {
    console.error(msg, errObj);
  }

  warning(message: string, errObj?: Error) {
    notify({ message }, 'warning', 5000);

    console.error(message, errObj);
  }

  info(message: string) {
    notify({ message }, 'info', 5000);

    console.log(message);
  }
}
