import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./user/user";
import { ObservableDemo } from './observable-demo/observable-demo';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header, User, ObservableDemo]
})
export class App {
  protected readonly title = signal('angular-poc');
}
