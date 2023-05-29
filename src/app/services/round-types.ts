export enum IconTypes {
  DROPLET = "DROPLET",
  LEAF = "LEAF",
  CLOUD = "CLOUD",
  FLOWER = "FLOWER"
}

export interface RoundTypes {
  iconType: IconTypes;
  linearMultiplier?: number;
  nonLinearMultiplier?: number[];
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
  winner: boolean;
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
    nonLinearMultiplier: [
      0,
      1,
      3,
      6,
      10,
      15,
      21,
      28,
      36,
      45,
      55,
      66,
      78,
      91,
      105,
      120,
    ],
    usedInRounds: [2],
  }
];

export const roundsConfigMap: Record<IconTypes | string, RoundTypes> =
  roundsConfig.reduce((a, v) => ({ ...a, [v.iconType]: v}), {})
