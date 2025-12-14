import { Routes } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';

const routes: Routes = [
    { path: 'app', component: AppHeaderComponent },
    { path: '', redirectTo: 'app', pathMatch: 'full' },
    { path: '**', redirectTo: 'app' }
];