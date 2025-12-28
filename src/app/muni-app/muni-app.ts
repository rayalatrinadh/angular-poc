import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-muni-app',
  imports: [],
  templateUrl: './muni-app.html',
  styleUrl: './muni-app.css',
})
export class MuniApp {

  @Input() messageFromAppToMuni : String = '';

}
