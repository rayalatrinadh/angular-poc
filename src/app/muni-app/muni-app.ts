import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-muni-app',
  imports: [],
  templateUrl: './muni-app.html',
  styleUrl: './muni-app.css',
})
export class MuniApp {

  @Input() messageFromAppToMuni : String = '';

  @Output() muniMessage : String = 'I am in Muni, How are you';

  @Output() someEvent = new EventEmitter();

}
