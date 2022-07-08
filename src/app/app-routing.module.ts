import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { CarteComponent } from './meteo/pages/carte/carte.component';
import { ConfigComponent } from './meteo/pages/config/config.component';
import { CreditsComponent } from './meteo/pages/credits/credits.component';
import { GraphComponent } from './meteo/pages/graph/graph.component';
import { MeteoComponent } from './meteo/pages/meteo/meteo.component';
import { PrevisionsComponent } from './meteo/pages/previsions/previsions.component';

const routes: Routes = [
  {path: '', redirectTo: 'meteo', pathMatch: 'full'},
  {path: 'meteo', component: MeteoComponent},
  {path: 'config', component: ConfigComponent},
  {path: 'credits', component: CreditsComponent},
  {path: 'previsions', component: PrevisionsComponent},
  {path: 'carte', component: CarteComponent},
  {path: 'graph', component: GraphComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
