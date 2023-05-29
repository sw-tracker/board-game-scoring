import { Component } from '@angular/core';
import {
  roundsConfig,
  PlayerScore,
  RoundTypes,
} from './services/round-types';
import { ScoringCalculationService } from './services/scoring-calculation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  roundsConfig = roundsConfig;
  playerScores: PlayerScore[];
  constructor(private readonly scoringCalculationService: ScoringCalculationService) {
    this.playerScores = this.scoringCalculationService.getPlayerScores();
  }

  onPlayerNameChange($event: string, playerIndex: number) {
    this.scoringCalculationService.setPlayerName(playerIndex, $event);
    this.playerScores = this.scoringCalculationService.getPlayerScores();
  }

  onScoreChange($event: number | undefined, playerIndex: number, roundIndex: number, round: RoundTypes) {
    this.scoringCalculationService.updatePlayerScore(playerIndex, roundIndex, round, $event);
    this.playerScores = this.scoringCalculationService.getPlayerScores();
  }
}
