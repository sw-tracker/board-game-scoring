import { Component } from '@angular/core';
import {PlayerScore} from "src/app/services/round-types";
import {
  ScoringCalculationService
} from "src/app/services/scoring-calculation.service";

@Component({
  selector: 'app-scores-row',
  templateUrl: './scores-row.component.html',
  styleUrls: ['./scores-row.component.scss']
})
export class ScoresRowComponent {
  playerScores: PlayerScore[];

  constructor(private readonly scoringCalculationService: ScoringCalculationService) {
    this.playerScores = this.scoringCalculationService.getPlayerScores();
  }

  getPlayerTotalScore(playerIndex: number) {
    return this.playerScores[playerIndex].total;
  }

  getPlayerIsWinner(playerIndex: number) {
    return this.playerScores[playerIndex].winner;
  }
}
