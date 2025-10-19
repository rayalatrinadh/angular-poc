import { Component } from '@angular/core';
import { NgForOf } from '@angular/common'; 

@Component({
  selector: 'app-observable-demo',
  imports: [NgForOf],
  templateUrl: './observable-demo.html',
  styleUrl: './observable-demo.css'
})
export class ObservableDemo {
  data : any[] = [1,2,3,4,5];

  trinadhdata : any = 18;
}
