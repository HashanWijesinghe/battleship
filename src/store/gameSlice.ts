/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import strings from '@shared/strings';
import mockData from '@src/mockData.json';
import { GameState } from '@src/shared/types';
import { checkIsHit } from '@src/services/gameServices';

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
    shipLayouts: mockData.layout,
    score: 0,
  },
};

const playerOneFire = (
  state: GameState,
  action: PayloadAction<[row: number, column: number]>
) => {
  const { isHit, ship } = checkIsHit(
    state.player2.shipLayouts || [],
    action.payload
  );

  // log shots
  state.player1.playerShots = [...state.player1.playerShots, action.payload];

  // if its a hit then increase the score
  if (isHit) {
    state.player1.score = (state.player1.score || 0) + 1;
    state.player1.playerHits = [...state.player1.playerHits, action.payload];

    // mark hit against the ship
    state.player2.ownShipHits = {
      ...state.player2.ownShipHits,
      [ship]: (state.player2.ownShipHits[ship] || 0) + 1,
    };
  }
};

const resetGame = (state: GameState) => {
  state.player1 = initialState.player1;
  state.player2 = initialState.player2;
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    playerOneFire,
    resetGame,
  },
});

// Action creators are generated for each case reducer function
export const gameActions = {
  ...gameSlice.actions,
};

export default gameSlice.reducer;
