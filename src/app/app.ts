import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./user/user";
// import { ObservableDemo } from './observable-demo/observable-demo';
import { RouterOutlet } from '@angular/router';
import {CorpApp} from './corp-app/corp-app';
import {MuniApp} from './muni-app/muni-app';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CorpApp,MuniApp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit{
  protected readonly title = signal('angular-poc');

  msgToCorp : String = "Hello Corp, How are you! from app";

  msgToMuni : String = "Hello Muni, How are you!, From app to muni";

  @ViewChild(CorpApp) messageToAppFromCorp : String = ' ';

  
  constructor(){
    console.log('---- in app constructor');
    console.log(this.messageToAppFromCorp);
  }

  ngAfterViewInit(): void {
    console.log('---- in app ngAfterViewInit constructor');
    console.log(this.messageToAppFromCorp);
  }

  buttonClick(){
    console.log("button clicked");
  }
  keyEnter(event : any){
    console.log(event.keyCode);
  }

  keyEnterFilter(event : any){
    console.log(event.keyCode);
  }

  getUserText(htmlUserInput : HTMLInputElement){
    console.log(htmlUserInput.value);
    console.log(htmlUserInput.id);
  }

  
}
