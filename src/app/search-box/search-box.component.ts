import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import {User} from '../types';
import { ApiService } from '../services/api.services';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  inputfocus = false;
  userName = '';
  @Input() user: User[];
  @Output() selectUserEvent = new EventEmitter<string>();
  constructor(private API: ApiService) { }

  ngOnInit(): void {
  }

  public  selectUser(name: string) {
    this.userName = name;
    this.selectUserEvent.emit(name);
    this.API.changeUser(this.userName);
  }
  focusOut() {
    setTimeout(() => {
      this.inputfocus  = false;
    }, 200);
  }
  updateSearch() {
    this.API.changeUser(this.userName);
  }

}
