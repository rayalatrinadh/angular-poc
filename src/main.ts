import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';


console.log('Bootstrapping Angular app...');
bootstrapApplication(App, appConfig)
  .then(() => console.log('✅ Angular bootstrapped'))
  .catch((err) => console.error("Nah... Bootstrap Failed ",err));
