import { createAction, props, union } from '@ngrx/store';
import { Hole } from '../../models/game';

export const startGame = createAction('[Game] Start Game');
export const stopGame = createAction('[Game] Stop Game');
export const refreshGame = createAction('[Game] Refresh Game');
export const updateTimeLeft = createAction(
  '[Game] Update Time Left',
  props<{ timeLeft: number }>()
);
export const updateHoles = createAction(
  '[Game] Update Holes',
  props<{ holes: Hole[] }>()
);
export const whackMole = createAction(
  '[Game] Whack Mole',
  props<{ holeId: number }>()
);

const actions = union({
  startGame,
  stopGame,
  updateTimeLeft,
  updateHoles,
});

export type GameActionsUnion = typeof actions;
