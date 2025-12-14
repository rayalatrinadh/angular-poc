import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./user/user";
import { ObservableDemo } from './observable-demo/observable-demo';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Header, User, ObservableDemo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-poc');
}
