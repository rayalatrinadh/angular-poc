import { Component } from '@angular/core';

import {DUMMY_USERS} from '../dummy-users';

let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
randomIndex = (randomIndex == 0) ? 1 : randomIndex;

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  public selectedUser = DUMMY_USERS[randomIndex];
  //console.log();

  constructor(){
    console.log("01:----->Trinadh Note:  User constructor");
    console.log(this.selectedUser.id);
    console.log(this.selectedUser.name);
    console.log("01-----> Trinadh Note End");
  }

  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser(){
    console.log("clicked");
    const randomIndex = 0; //Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser= DUMMY_USERS[randomIndex];
  }

}
