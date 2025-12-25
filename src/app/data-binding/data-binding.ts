import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  userNameTrinadh : String = "Trinadh Rayala122";

  

  // getUserEnteredData(getUserData : HTMLInputElement){
  //   this.userNameTrinadh = getUserData.value;
  //   console.log(getUserData.value);
  // }

}
