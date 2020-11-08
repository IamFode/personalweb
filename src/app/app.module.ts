import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { MatematicasComponent } from './components/matematicas/matematicas.component';
import { MundoComponent } from './components/mundo/mundo.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ErrorComponent } from './components/error/error.component';
import { CalculoComponent } from './components/matematicas/calculo/calculo.component';
import { AlgebraComponent } from './components/matematicas/algebra/algebra.component';
import { AplicadaComponent } from './components/matematicas/aplicada/aplicada.component';
import { EconomiaComponent } from './components/mundo/economia/economia.component';
import { GestionComponent } from './components/mundo/gestion/gestion.component';
import { FilosofiaComponent } from './components/mundo/filosofia/filosofia.component';
import { HistoriaComponent } from './components/mundo/historia/historia.component';
import { CienciaPoliticaComponent } from './components/mundo/ciencia-politica/ciencia-politica.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MatematicasComponent,
    MundoComponent,
    ProyectosComponent,
    ErrorComponent,
    CalculoComponent,
    AlgebraComponent,
    AplicadaComponent,
    EconomiaComponent,
    GestionComponent,
    FilosofiaComponent,
    HistoriaComponent,
    CienciaPoliticaComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
