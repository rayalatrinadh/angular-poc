import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header]
})
export class App {
  protected readonly title = signal('angular-poc');
}
