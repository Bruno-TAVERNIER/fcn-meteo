import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { IconSearchComponent } from './components/icon-search/icon-search.component';

@NgModule({
  declarations: [
    IconSearchComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ IconSearchComponent ]
})
export class IconsModule { }
