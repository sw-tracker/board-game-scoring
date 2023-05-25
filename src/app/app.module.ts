import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RowHeaderComponent } from './row-header/row-header.component';
import { BorderedIconComponent } from './row-header/bordered-icon/bordered-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    RowHeaderComponent,
    BorderedIconComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
