import { Component } from '@angular/core';
import {PlayerScore} from "src/app/ohanami/services/round-types";
import {
  ScoringCalculationService
} from "src/app/ohanami/services/scoring-calculation.service";

@Component({
  selector: 'app-player-names-row',
  templateUrl: './player-names-row.component.html',
  styleUrls: ['./player-names-row.component.scss']
})
export class PlayerNamesRowComponent {
  playerScores: PlayerScore[];
  constructor(private readonly scoringCalculationService: ScoringCalculationService) {
    this.playerScores = this.scoringCalculationService.getPlayerScores();
  }

  onPlayerNameChange($event: string, playerIndex: number) {
    this.scoringCalculationService.setPlayerName(playerIndex, $event);
    this.playerScores = this.scoringCalculationService.getPlayerScores();
  }
}
