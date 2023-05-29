import { Component } from '@angular/core';
import {PlayerScore, RoundTypes, roundsConfig} from "src/app/ohanami/services/round-types";
import {
  ScoringCalculationService
} from "src/app/ohanami/services/scoring-calculation.service";

@Component({
  selector: 'app-ohanami',
  templateUrl: './ohanami.component.html',
  styleUrls: ['./ohanami.component.scss']
})
export class OhanamiComponent {

  roundsConfig = roundsConfig;
  playerScores: PlayerScore[];

  constructor(private readonly scoringCalculationService: ScoringCalculationService) {
    this.playerScores = this.scoringCalculationService.getPlayerScores();
  }

  onScoreChange($event: number | undefined, playerIndex: number, roundIndex: number, round: RoundTypes) {
    this.scoringCalculationService.updatePlayerScore(playerIndex, roundIndex, round, $event);
    this.playerScores = this.scoringCalculationService.getPlayerScores();
  }
}
