export interface Scoreboard {
  away: number;
  home: number;
  pending?: boolean;
}

export enum PlayingSide {
  Home = 'HOME',
  Away = 'AWAY'
}

export interface PlayerScore {
  side: PlayingSide;
  playerName: string;
  score: number;
}
