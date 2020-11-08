import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from'@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { MatematicasComponent } from './components/matematicas/matematicas.component';
import { MundoComponent } from './components/mundo/mundo.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ErrorComponent } from './components/error/error.component';
import { CalculoComponent } from './components/matematicas/calculo/calculo.component';
import { AlgebraComponent } from './components/matematicas/algebra/algebra.component';
import { AplicadaComponent } from './components/matematicas/aplicada/aplicada.component';
import{EconomiaComponent} from './components/mundo/economia/economia.component';
import{GestionComponent} from './components/mundo/gestion/gestion.component';
import{FilosofiaComponent} from './components/mundo/filosofia/filosofia.component';
import{HistoriaComponent} from './components/mundo/historia/historia.component';
import{CienciaPoliticaComponent} from './components/mundo/ciencia-politica/ciencia-politica.component';





const appRoutes: Routes = [
    {path:'',component:MatematicasComponent},
    {path:'about',component:AboutComponent},
    {path:'matematicas', component:MatematicasComponent},
    {path:'mundo',component:MundoComponent},
    {path:'economia',component:EconomiaComponent},
    {path:'gestion',component:GestionComponent},
    {path:'filosofia',component:FilosofiaComponent},
    {path:'historia',component:HistoriaComponent},
    {path:'politica',component:CienciaPoliticaComponent},
    {path:'proyectos', component: ProyectosComponent},
    {path:'calculo',component:CalculoComponent},
    {path: 'algebra',component:AlgebraComponent},
    {path:'aplicada',component:AplicadaComponent},
    {path:'**', component:ErrorComponent},

    //matematicas

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);