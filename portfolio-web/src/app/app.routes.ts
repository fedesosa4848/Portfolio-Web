import { Routes } from '@angular/router';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { ProjectsComponent } from './Pages/projects/projects.component';

export const routes: Routes = [
   
    {
        path:'home',
        component:HomepageComponent
    },
    {
        path:'proyects',
        component:ProjectsComponent
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    }
];
