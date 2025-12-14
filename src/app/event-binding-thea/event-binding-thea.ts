import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-thea',
  imports: [],
  templateUrl: './event-binding-thea.html',
  styleUrl: './event-binding-thea.css',
})
export class EventBindingThea {

  personName : string = "Trinadh Rayala event binding example";

  keyBinding(){
    console.log('key entered');
  }



}
