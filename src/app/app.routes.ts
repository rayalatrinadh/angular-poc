import { Routes } from '@angular/router';
import { DataBindingthea } from './data-bindingthea/data-bindingthea';
import { Signaldemothea } from './signaldemothea/signaldemothea';
import { Variabledemothea } from './variabledemothea/variabledemothea';
import { EventBindingThea} from './event-binding-thea/event-binding-thea';

export const routes: Routes = [


    {
        path:'databinding',
        component : DataBindingthea

    },
    {
        path:'signal',
        component:Signaldemothea
    },
    {
        path:'variable',
        component:Variabledemothea
    },
    {
        path:'eventBinding',
        component: EventBindingThea
    }




];
