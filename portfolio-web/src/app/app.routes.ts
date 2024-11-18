import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { CardComponent } from './Components/proyect/card/card.component';

export const routes: Routes = [
   
    {
        path:'home',
        component:HomepageComponent
    },
    {
        path:'proyects',
        component:CardComponent
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    }
];
