import { Component } from '@angular/core';
import { SmartGameComponent } from './features/game/smart-game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SmartGameComponent],
  template: `<app-smart-game></app-smart-game>`,
})
export class AppComponent {
  title = 'whack-a-mole';
}
