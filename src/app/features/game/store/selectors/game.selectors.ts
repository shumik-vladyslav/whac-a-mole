import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameState } from '../state/game.state';

export const selectGameState = createFeatureSelector<GameState>('game');

export const selectHoles = createSelector(
  selectGameState,
  (state) => state.holes
);

export const selectScore = createSelector(
  selectGameState,
  (state) => state.score
);

export const selectGameActive = createSelector(
  selectGameState,
  (state) => state.gameActive
);

export const selectTimeLeft = createSelector(
  selectGameState,
  (state) => state.timeLeft
);

export const selectHighScore = createSelector(
  selectGameState,
  (state: GameState) => state.highScore
);

export const selectGameOver = createSelector(
  selectGameState,
  (state: GameState) => state.gameOver
);
