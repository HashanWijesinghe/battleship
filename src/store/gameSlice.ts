/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import strings from '../shared/strings';
import mockData from '../mockData.json';

export interface GameState {
  player1: {
    name?: string;
    playerShots: Array<Array<number>>;
    playerHits: Array<Array<number>>;
    score?: number;
    shipsLayout?: Array<Array<number>>;
    ownShipHits: { [x: string]: number };
  };
  player2: {
    name?: string;
    playerShots: Array<Array<number>>;
    playerHits: Array<Array<number>>;
    score?: number;
    shipsLayout?: Array<{ ship: string; positions: number[][] }>;
    ownShipHits: { [x: string]: number };
  };
}

const initialState: GameState = {
  player1: {
    name: strings.player1,
    playerShots: [],
    playerHits: [],
    ownShipHits: {},
    score: 0,
  },
  player2: {
    name: strings.player2,
    playerShots: [],
    playerHits: [],
    ownShipHits: {},
    shipsLayout: mockData.layout,
    score: 0,
  },
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    playerOneFire: (state: GameState, action: PayloadAction<Array<number>>) => {
      // check if its a hit
      let isHit = false;
      let ship = '';

      state.player2.shipsLayout?.forEach((layout) => {
        if (JSON.stringify(layout.positions).includes(`${action.payload}`)) {
          isHit = true;
          ship = layout.ship;
        }
      });

      // log shots
      state.player1.playerShots = [
        ...state.player1.playerShots,
        action.payload,
      ];

      // if hit increase score
      if (isHit) {
        state.player1.score = (state.player1.score || 0) + 1;
        state.player1.playerHits = [
          ...state.player1.playerHits,
          action.payload,
        ];

        // mark against ship
        state.player2.ownShipHits = {
          ...state.player2.ownShipHits,
          [ship]: (state.player2.ownShipHits[ship] || 0) + 1,
        };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { playerOneFire } = gameSlice.actions;

export default gameSlice.reducer;
