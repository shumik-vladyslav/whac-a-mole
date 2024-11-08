import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { gameReducer } from './features/game/store/reducers/game.reducer';
import { GameEffects } from './features/game/store/effects/game.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideStore({ game: gameReducer }),
    provideEffects(GameEffects),
  ],
};
