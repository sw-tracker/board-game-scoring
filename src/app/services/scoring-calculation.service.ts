import {Injectable} from '@angular/core';
import {
  PlayerScore,
  roundsConfig,
  IconTypes,
  PlayerScoreRound,
  RoundTypes,
} from './round-types';
import { isNotNullOrUndefined, isNullOrUndefined } from '../utils/utils';

const MAX_PLAYERS = 4;
const MAX_ROUNDS = 3;
const icontTypesArray = Object.keys(IconTypes);

@Injectable({
  providedIn: 'root'
})
export class ScoringCalculationService {
  private playerScores: PlayerScore[] = [];

  constructor() {
    for (let p = 0; p < MAX_PLAYERS; p++) {
      this.playerScores[p] = {
        rounds: this.createEmptyRounds(),
      };
    }
  }

  private createEmptyRounds() {
    const rounds: PlayerScoreRound[] = [];

    for (let r = 0; r < MAX_ROUNDS; r++) {
      for (const round in roundsConfig) {
        if (roundsConfig[round].usedInRounds.includes(r)) {
          rounds[r] = {
            totalCards: {
              DROPLET: undefined,
              LEAF: undefined,
              CLOUD: undefined,
              FLOWER: undefined,
            }
          }
        }
      }
    }

    return rounds;
  }

  public getPlayerScores() {
    return this.playerScores;
  }

  public setPlayerName(playerIndex: number, playerName: string) {
    this.playerScores[playerIndex].playerName = playerName;
  }

  public updatePlayerScore(playerIndex: number, roundIndex: number, round: RoundTypes, score?: number) {
    this.playerScores[playerIndex].rounds[roundIndex].totalCards[round.iconType] = score;
    this.calculateScores();
  }

  private calculateScores() {
    for (let playerIndex = 0; playerIndex < this.playerScores.length; playerIndex++) {
      let total: number | undefined;
      this.playerScores[playerIndex].rounds.forEach(r => {
        icontTypesArray.forEach(icon => {
          const currentScoreValue = r.totalCards[icon];
          if (isNotNullOrUndefined(currentScoreValue)) {
            total = isNullOrUndefined(total) ? 0 : total;
            total += currentScoreValue;
          }
        });
      });
      this.playerScores[playerIndex].total = total;
    }
  }

  private getConfigByIconType(iconType: IconTypes) {
    for (let roundsConfigKey in roundsConfig) {
      if (roundsConfig[roundsConfigKey].iconType === iconType) {
        return roundsConfig[roundsConfigKey];
      }
    }
    return undefined;
  }

  private getMultiplierByIconType(iconType: IconTypes, round: number) {
    this.getConfigByIconType(iconType)
  }
}
