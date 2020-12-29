import { Component, OnInit, Input } from '@angular/core';
import {User} from '../types';
import { ApiService } from '../services/api.services';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  @Input() user: User[];
  message = '';
  constructor(private API: ApiService) { }

  ngOnInit(): void {
    this.API.currentMessage.subscribe(msg => {this.message = msg;});
  }

}
