import { Component, inject } from '@angular/core';
import { MainGameComponent } from './components/main-game/main-game.component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as GameActions from './store/actions/game.actions';
import * as GameSelectors from './store/selectors/game.selectors';
import { shareReplay } from 'rxjs';
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { GameOverComponent } from './components/game-over/game-over.component';

@Component({
  selector: 'app-smart-game',
  standalone: true,
  imports: [CommonModule, MainGameComponent, StartScreenComponent, GameOverComponent],
  templateUrl: './smart-game.component.html',
})
export class SmartGameComponent {
  private store = inject(Store);

  holes$ = this.store.select(GameSelectors.selectHoles);
  score$ = this.store.select(GameSelectors.selectScore);
  gameActive$ = this.store.select(GameSelectors.selectGameActive).pipe(shareReplay(1));
  timeLeft$ = this.store.select(GameSelectors.selectTimeLeft);
  highScore$ = this.store.select(GameSelectors.selectHighScore);
  gameIsOver$ = this.store.select(GameSelectors.selectGameOver).pipe(shareReplay(1));;

  startGame(): void {
    this.store.dispatch(GameActions.startGame());
  }

  stopGame(): void {
    this.store.dispatch(GameActions.stopGame());
  }

  whack(holeId: number): void {
    this.store.dispatch(GameActions.whackMole({ holeId }));
  }

  refreshGame(): void {
    this.store.dispatch(GameActions.refreshGame());
  }
}
