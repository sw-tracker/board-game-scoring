export enum IconTypes {
  DROPLET = "DROPLET",
  LEAF = "LEAF",
  CLOUD = "CLOUD",
  FLOWER = "FLOWER"
}

export interface RoundTypes {
  iconType: IconTypes;
  linearMultiplier?: number;
  nonLinearMultiplier?: Record<number, number>;
  usedInRounds: number[];
}

export type EnumDictionary<T extends string | symbol | number, U> = {
  [K in T]: U;
};

export interface PlayerScoreRound {
  totalCards: EnumDictionary<IconTypes | string, number | undefined>;
}

export interface PlayerScore {
  playerName?: string;
  rounds: PlayerScoreRound[];
  total?: number;
}

export const roundsConfig: RoundTypes[] = [
  {
    iconType: IconTypes.DROPLET,
    linearMultiplier: 3,
    usedInRounds: [0, 1, 2],
  },
  {
    iconType: IconTypes.LEAF,
    linearMultiplier: 4,
    usedInRounds: [1, 2],
  },
  {
    iconType: IconTypes.CLOUD,
    linearMultiplier: 7,
    usedInRounds: [2],
  },
  {
    iconType: IconTypes.FLOWER,
    nonLinearMultiplier: {
      0: 0,
      1: 1,
      2: 3,
      3: 6,
      4: 10,
      5: 15,
      6: 21,
      7: 28,
      8: 36,
      9: 45,
      10: 55,
      11: 66,
      12: 78,
      13: 91,
      14: 105,
      15: 120,
    },
    usedInRounds: [2],
  }
];
