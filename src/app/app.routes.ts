import { Routes } from '@angular/router';
import { ObservableDemo } from './observable-demo/observable-demo';
import { SignalDemo } from './signal-demo/signal-demo';


export const routes: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: 'observable', component: ObservableDemo},
    {path : 'signal', component: SignalDemo},
    { path: '**', redirectTo: 'app' }

    
];