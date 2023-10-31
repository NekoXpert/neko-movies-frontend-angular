import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrarComponent } from './components/auth/registrar/registrar.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { FuncionesComponent } from './components/funciones/funciones.component';
import { SalasComponent } from './components/salas/salas.component';

export const routes: Routes = [

    { path: '', component: DashboardComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'auth/registrar', component: RegistrarComponent },
    { path: 'funciones', component: FuncionesComponent },
    { path: 'salas', component: SalasComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'peliculas', component: PeliculasComponent },


];
