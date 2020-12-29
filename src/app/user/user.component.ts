import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.services';
import {User} from '../types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userList: User[];

constructor(private API: ApiService) { }

  ngOnInit(): void {
    this.API.getUsers()
    .subscribe(
      data => {
        this.userList = data;
      }
    );
  }

}
