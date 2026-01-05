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
export class App{
  protected readonly title = signal('angular-poc');

  
}
