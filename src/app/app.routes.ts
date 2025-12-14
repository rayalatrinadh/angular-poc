import { Routes } from '@angular/router';



const routes: Routes = [
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: '**', redirectTo: 'app' }
];