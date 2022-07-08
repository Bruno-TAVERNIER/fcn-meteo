import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { IconsModule } from '../icons/icons.module';
import { MeteoModule } from '../meteo/meteo.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    UiModule,
    IconsModule,
    MeteoModule,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
