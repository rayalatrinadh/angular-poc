import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-corp-app',
  imports: [],
  templateUrl: './corp-app.html',
  styleUrl: './corp-app.css',
})
export class CorpApp {

  // messageFromApp : String = 't';

  testDataFromCorp : String = 'test';

  test1DataFromCorp01 : String = 'data test from corp';

  messageToAppFromCorp : String = "Message to app from corp";

}
