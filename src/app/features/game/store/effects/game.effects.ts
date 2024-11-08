import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, interval, Observable, of, timer } from 'rxjs';
import {
  map,
  takeUntil,
  withLatestFrom,
  switchMap,
  tap,
  expand,
} from 'rxjs/operators';
import * as GameActions from '../actions/game.actions';
import { selectGameActive, selectGameState } from '../selectors/game.selectors';
import { GAME_CONSTANTS } from '../../constants/const';
import { GameState } from '../state/game.state';
import { Hole } from '../../models/game';

@Injectable()
export class GameEffects {
  private readonly actions$ = inject(Actions);
  private readonly store = inject(Store);

  private readonly gameStop$ = this.actions$.pipe(ofType(GameActions.stopGame));

  startGameTimer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActions.startGame),
      switchMap(() => this.createGameTimer())
    )
  );

  showMole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActions.startGame),
      switchMap(() => this.createMoleSequence())
    )
  );

  private createGameTimer(): Observable<GameActions.GameActionsUnion> {
    return interval(GAME_CONSTANTS.TICK_INTERVAL).pipe(
      withLatestFrom(this.store.select(selectGameState)),
      map(([_, state]) => this.handleGameTick(state)),
      takeUntil(this.gameStop$)
    );
  }

  private handleGameTick(state: GameState): GameActions.GameActionsUnion {
    return state.timeLeft <= 0 || !state.gameActive
      ? GameActions.stopGame()
      : GameActions.updateTimeLeft({ timeLeft: state.timeLeft - 1 });
  }

  private createMoleSequence(): Observable<GameActions.GameActionsUnion> {
    return of(null).pipe(
      expand(() => timer(this.getRandomShowDuration() * GAME_CONSTANTS.TICK_INTERVAL)),
      withLatestFrom(this.store.select(selectGameActive)),
      switchMap(([_, gameActive]) =>
        gameActive
          ? of(GameActions.updateHoles({ holes: this.generateHoles() }))
          : EMPTY
      ),
      tap((s) => console.log(s)),
      takeUntil(this.gameStop$),
    );
  }

  private generateHoles(): Hole[] {
    const randomHole = Math.floor(Math.random() * GAME_CONSTANTS.HOLE_COUNT);

    return Array(GAME_CONSTANTS.HOLE_COUNT)
      .fill(null)
      .map((_, index) => ({
        id: index,
        active: index === randomHole,
      }));
  }

  private getRandomShowDuration(): number {
    return (
      Math.floor(
        Math.random() *
          (GAME_CONSTANTS.MOLE_SHOW_MAX_TIME -
            GAME_CONSTANTS.MOLE_SHOW_MIN_TIME +
            1)
      ) + GAME_CONSTANTS.MOLE_SHOW_MIN_TIME
    );
  }
}
