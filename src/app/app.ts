import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chat } from './chat/chat';
import { DataBindingthea } from './data-bindingthea/data-bindingthea';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('websocket-frontend');

  

  constructor(){
    console.log('::in App Component(1), Constructor()');
    console.log("::App Component(2) initialized");
  }
}
