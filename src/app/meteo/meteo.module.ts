import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './pages/config/config.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { MeteoComponent } from './pages/meteo/meteo.component';
import { PrevisionsComponent } from './pages/previsions/previsions.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { CarteComponent } from './pages/carte/carte.component';
import { GraphComponent } from './pages/graph/graph.component';

@NgModule({
  declarations: [
    ConfigComponent,
    CreditsComponent,
    MeteoComponent,
    PrevisionsComponent,
    SearchFormComponent,
    CarteComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MeteoModule { }
