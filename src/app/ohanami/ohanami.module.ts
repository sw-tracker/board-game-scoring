import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OhanamiComponent} from './ohanami.component';
import {
  RowHeaderComponent
} from "src/app/ohanami/row-header/row-header.component";
import {
  BorderedIconComponent
} from "src/app/ohanami/row-header/bordered-icon/bordered-icon.component";
import {
  ScoreInputComponent
} from "src/app/ohanami/score-input/score-input.component";
import {
  PlayerNameInputComponent
} from "src/app/ohanami/player-name-input/player-name-input.component";
import {
  FlowerPointsComponent
} from "src/app/ohanami/flower-points/flower-points.component";
import {
  ScoresRowComponent
} from "src/app/ohanami/scores-row/scores-row.component";
import {
  PlayerNamesRowComponent
} from "src/app/ohanami/player-names-row/player-names-row.component";
import {BrowserModule} from "@angular/platform-browser";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    OhanamiComponent,
    RowHeaderComponent,
    BorderedIconComponent,
    ScoreInputComponent,
    PlayerNameInputComponent,
    FlowerPointsComponent,
    ScoresRowComponent,
    PlayerNamesRowComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
  ],
  exports: [
    OhanamiComponent
  ]
})
export class OhanamiModule {
}
