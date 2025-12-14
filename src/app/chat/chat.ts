// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-chat',
//   imports: [],
//   templateUrl: './chat.html',
//   styleUrl: './chat.css',
// })
// export class Chat {

// }


import { Component } from '@angular/core';
import { WebsocketService, ChatMessage } from '../services/websocket';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-chat',
  standalone:true,
  imports: [FormsModule, CommonModule],
  templateUrl: './chat.html',
  styleUrls: ['./chat.css']
})


export class Chat {
  
  from: string = '';
  text: string = '';
  messages: ChatMessage[] = [];



  constructor(private wsService: WebsocketService) {
    console.log(':: in Chat component Constructor(1) in webSocket.ts-----------------------> : chart.ts Chat Component Initialized');
    //Subscribe to message from backend
    this.wsService.onMessages().subscribe((msg) => {
      if (msg) {
        console.log(":: in Chat Component(2), message received from the server in chart component constructor", msg);
        this.messages.push(msg);
      }
    });
  }

  sendMessage() {
    console.log('::in Chat Component, this sendMessage(3) from chat.ts is called by clicking the send button in html');
    if (this.text.trim() && this.from.trim()) {
      this.wsService.sendMessage({ from: this.from, text: this.text });
      this.text = '';
    }
  }
}
