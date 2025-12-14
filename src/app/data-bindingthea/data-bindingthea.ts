import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-bindingthea',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './data-bindingthea.html',
  styleUrl: './data-bindingthea.css',
})
export class DataBindingthea {


  personName : any = "trinadh rayala";
  enterFieldValue : any = "Enter Your Name";

  changePersonName(personName : string ): any{
   // alert('this changePersonName function calling');
    this.personName = personName;
  }


}
