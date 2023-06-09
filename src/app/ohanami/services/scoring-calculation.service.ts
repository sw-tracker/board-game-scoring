import {Injectable} from '@angular/core';
import {
  PlayerScore,
  roundsConfig,
  IconTypes,
  PlayerScoreRound,
  RoundTypes,
  roundsConfigMap,
} from './round-types';
import { isNotNullOrUndefined, isNullOrUndefined } from '../../utils/utils';

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
        winner: false,
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
      this.playerScores[playerIndex].rounds.forEach(round => {
        icontTypesArray.forEach(icon => {
          const currentScoreValue = round.totalCards[icon];
          if (isNotNullOrUndefined(currentScoreValue)) {
            total = isNullOrUndefined(total) ? 0 : total;
            total += this.getMultipliedScore(currentScoreValue, Object(IconTypes)[icon]);
          }
        });
      });
      this.playerScores[playerIndex].total = total;
    }
    this.calculateWinner()
  }

  private getConfigByIconType(iconType: IconTypes) {
    return roundsConfigMap[iconType];
  }

  private getMultipliedScore(totalCards: number, iconType: IconTypes) {
    const config = this.getConfigByIconType(iconType);
    const multiplier = config.linearMultiplier;

    if (isNotNullOrUndefined(multiplier)) {
      return totalCards * multiplier;
    }

    const nonLinearMultiplier = config.nonLinearMultiplier ?? [];
    return nonLinearMultiplier[totalCards] ?? nonLinearMultiplier[nonLinearMultiplier?.length - 1] ?? 0;
  }

  public getFlowerPoints() {
    return roundsConfigMap[IconTypes.FLOWER].nonLinearMultiplier;
  }

  private calculateWinner() {
    let winnerIndexes: number[] = [];
    let maxScore = 0;
    this.playerScores.forEach((player, playerIndex) => {
      if (isNotNullOrUndefined(player.total)) {
        if (player.total === maxScore) {
          winnerIndexes.push(playerIndex);
        } else if (player.total > maxScore) {
          winnerIndexes = [playerIndex];
          maxScore = player.total;
        }
      }
    });

    // deal with ties: pink flowers win ties
    if (winnerIndexes.length > 1) {
      let maxFlowers = 0;
      let tieBreakerWinners: number[] = [];
      this.playerScores.forEach((player, playerIndex) => {
        if (winnerIndexes.includes(playerIndex)) {
          const totalFlowers = player.rounds
            .map(r => r.totalCards[IconTypes.FLOWER])
            .reduce((prev, totalFlowers) => (prev ?? 0) + (totalFlowers ?? 0)) ?? 0;

          if (totalFlowers === maxFlowers) {
            tieBreakerWinners.push(playerIndex);
          } else if (totalFlowers > maxFlowers) {
            tieBreakerWinners = [playerIndex];
            maxFlowers = totalFlowers;
          }
        }
      });
      winnerIndexes = tieBreakerWinners;
    }

    this.playerScores.forEach((player, playerIndex) => {
      player.winner = winnerIndexes.includes(playerIndex);
    });
  }
}
