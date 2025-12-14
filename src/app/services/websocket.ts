// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class Websocket {
  
// }


import { Injectable } from '@angular/core';
import { Client, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ChatMessage {
  from: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private client: Client;
  private messages$ = new BehaviorSubject<ChatMessage | null>(null);

  constructor() {
    console.log('::: in WebsocketService(1) in webSocket.ts-----------------------> : WebsocketService in websocket.ts constructor(');
    this.client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
      debug: (msg) => console.log(':: in WebsocketService(2) in webSocket.ts------ > STOMP:', msg),
      reconnectDelay: 5000,
    });

    console.log(':: in WebsocketService(3) in webSocket.ts------after new Client() object in webSocket.ts');
    this.client.onConnect = () => {
      console.log('✅ :: in WebsocketService(4) in webSocket.ts -------- Connected to backend');
      this.client.subscribe('/topic/messages', (message: IMessage) => {
        const body = JSON.parse(message.body) as ChatMessage;
       // alert(`New message from ${body.from}: ${body.text}`);
       /**
        * 
        * 1.The $ at the end means “this variable is an Observable.”
        * 
        * 
        *  */ 
       
       this.messages$.next(body); //once the message or body comes from the backend server, then it sends/emits to all the subscribers (in this example )
      });
    };

    console.log(':: in WebsocketService(5) in webSocket.ts------after onConnect in websocket.ts');

    this.client.onStompError = (frame) => {
      console.error('❌ :: in WebsocketService(6) in webSocket.ts----------STOMP error:', frame.headers['message']);
    };

    console.log(':: in WebsocketService(7) in webSocket.ts--------- before client.activate() in webSocket.ts');
    this.client.activate();
    console.log(':: in WebsocketService(8) in webSocket.ts------------ after client.activate() in websocket.ts');
  }



  sendMessage(msg: ChatMessage) {
    console.log(':: in WebsocketService(9) in webSocket.ts------this sendMessage() is in websocket.ts to send message to backend destination /app/send');
    if (this.client.connected) {
      this.client.publish({
        destination: '/app/send',
        body: JSON.stringify(msg),
      });
    } else {
      console.warn('⚠️ :: in WebsocketService(10) in webSocket.ts-------Not connected yet');
    }
    console.log(':: in WebsocketService(11) in webSocket.ts-----------end of sendMessage in websocket.ts');
  }

  onMessages(): Observable<ChatMessage | null> {
    console.log(':: in WebsocketService(12) in webSocket.ts----------onMessage() observabe');
    return this.messages$.asObservable();
  }
}
