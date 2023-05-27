import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RowHeaderComponent } from './row-header/row-header.component';
import { BorderedIconComponent } from './row-header/bordered-icon/bordered-icon.component';
import { ScoreInputComponent } from './score-input/score-input.component';
import { PlayerNameInputComponent } from './player-name-input/player-name-input.component';
import { FlowerPointsComponent } from './flower-points/flower-points.component';

@NgModule({
  declarations: [
    AppComponent,
    RowHeaderComponent,
    BorderedIconComponent,
    ScoreInputComponent,
    PlayerNameInputComponent,
    FlowerPointsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
