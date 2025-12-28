import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-corp-app',
  imports: [],
  templateUrl: './corp-app.html',
  styleUrl: './corp-app.css',
})
export class CorpApp {

  @Input() messageFromApp : String = '';

}
