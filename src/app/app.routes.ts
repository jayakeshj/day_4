import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CardsComponent } from './units/cards/cards.component';
import { SingleComponent } from './pages/single/single.component';
import { SignComponent } from './units/sign/sign.component';

export const routes: Routes = [
    {
        path:'',component: HomeComponent
    },
    {
        path:'card',component:CardsComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'card/:id',component:SingleComponent
    },
    {
        path:'sign',component:SignComponent
    }
];
