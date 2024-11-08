import { createReducer, on } from '@ngrx/store';
import { initialGameState } from '../state/game.state';
import * as GameActions from '../actions/game.actions';

export const gameReducer = createReducer(
  initialGameState,
  on(GameActions.startGame, (state) => ({
    ...state,
    score: 0,
    timeLeft: 30,
    gameActive: true,
    gameOver: false,
    holes: initialGameState.holes
  })),
  on(GameActions.stopGame, (state) => ({
    ...state,
    gameActive: false,
    gameOver: true,
    timeLeft: 30,
    highScore: state.score > state.highScore ? state.score : state.highScore,
    holes: state.holes.map(hole => ({ ...hole, active: false }))
  })),
  on(GameActions.refreshGame, (state) => ({
    ...state,
    gameActive: false,
    gameOver: false,
  })),
  on(GameActions.updateTimeLeft, (state, { timeLeft }) => ({
    ...state,
    timeLeft
  })),
  on(GameActions.updateHoles, (state, { holes }) => ({
    ...state,
    score: state.holes.some(hole => hole.active) ? state.score - 1 : state.score,
    holes
  })),
  on(GameActions.whackMole, (state, { holeId }) => ({
    ...state,
    score: state.holes[holeId].active ? state.score + 1 : state.score,
    holes: state.holes.map((hole, index) => ({
      ...hole,
      active: index === holeId ? false : hole.active
    }))
  }))
);
