import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {OrdenadoresComponent} from './components/ordenadores/ordenadores.component';
import {OrdenadorComponent} from './components/ordenador/ordenador.component';
const APP_ROUTES: Routes = [

     {path:'home', component: HomeComponent},
     {path:'about', component: AboutComponent},
     {path:'ordenadores', component: OrdenadoresComponent},
     {path:'ordenador/:id', component: OrdenadorComponent},
     {path:'**', pathMatch:'full', redirectTo:'home'},

]; 

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);