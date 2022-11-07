import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  readonly title = 'Administrace správců a vlastníků OM';
  usersDataSource: CustomStore;

  committeeCandidatesDataSource = [
    {
      id: 1,
      name: 'Administrátor',
    },
    {
      id: 2,
      name: 'Správce komunity',
    },
    {
      id: 3,
      name: 'Správce/majitel OM',
    },
    {
      id: 4,
      name: 'Návštěvník',
    },
  ];

  constructor(public usersService: UsersService) {
    this.usersDataSource = usersService.usersStore;
  }
}
