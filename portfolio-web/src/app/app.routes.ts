import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';

export const routes: Routes = [
   
    {
        path:'home',
        component:HomepageComponent
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    }
];
