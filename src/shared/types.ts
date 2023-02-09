export interface GameState {
  player1: Player;
  player2: Player;
}

export interface ShipLayout {
  ship: string;
  positions: number[][];
}

export interface Player {
  name?: string;
  playerShots: number[][];
  playerHits: number[][];
  score?: number;
  shipLayouts?: Array<ShipLayout>;
  ownShipHits: { [x: string]: number };
}
