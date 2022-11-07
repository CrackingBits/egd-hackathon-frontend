import { Injectable } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import CustomStore from 'devextreme/data/custom_store';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private authService: AuthService) {}

  get usersStore(): CustomStore {
    const url = `${environment.api}/users-mock.json`;
    return createStore({
      key: 'id',
      loadUrl: url,
      insertUrl: url,
      updateUrl: url,
      deleteUrl: url,
      onBeforeSend: this.authService.createStoreOnBeforeSend,
      errorHandler: this.authService.createStoreErrorHandler,
      onLoaded: this.onLoading,
    });
  }

  onLoading(data: any[]) {
    // TODO role pouze ilustrativně pro demo na hackathonu / only illustrative for hackhathon
    for (let item of data) {
      if (item.email === 'janpolan@gmail.com') {
        item.role = [1, 2];
      } else if (item.email === 'michal.pirgl@gmail.com') {
        item.role = [2, 3];
      } else if (item.email) {
        item.role = [3];
      } else {
        item.role = [3 + Math.floor(Math.random() * 1)];
      }
    }
  }
}
