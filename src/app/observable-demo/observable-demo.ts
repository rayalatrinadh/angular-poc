import { Component } from '@angular/core';
import { NgForOf } from '@angular/common'; 
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  imports: [NgForOf],
  templateUrl: './observable-demo.html',
  styleUrl: './observable-demo.css'
})
export class ObservableDemo {
  data : any[] = [];

  //  subscription!: Subscription;

  // // ngOnInit() {
  // //   this.subscription = interval(1000).subscribe(() => {
  // //     this.data.push(new Date().toLocaleTimeString());
  // //   });

  // // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe(); // ✅ Cleanup
  // }

  // trinadhdata : any = 18;


  //observer
  myObservable = new Observable((observer) => {
   
    setTimeout(() => {observer.next(1)}, 1000);
    setTimeout(() => {observer.next(2)}, 3000);
    setTimeout(() => {observer.next(3)}, 4000);
    setTimeout(() => {observer.next(4)}, 5000);
    setTimeout(() => {observer.next(5)}, 8000);
    setTimeout(() => {observer.next("done")}, 8000);


  })




getAsyncData(){
//alert("get asyncData");
this.myObservable.subscribe((val : any) => {
  this.data.push(val);
});
}


}
