export enum IconTypes {
  DROPLET,
  LEAF,
  CLOUD,
  FLOWER
}

export interface RoundTypes {
  iconType: IconTypes;
  linearMultiplier?: number;
  nonLinearMultiplier?: Record<number, number>;
  usedInRounds: number[];
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
