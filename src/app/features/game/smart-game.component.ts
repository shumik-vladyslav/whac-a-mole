import { Component } from '@angular/core';
import { MainGameComponent } from './components/main-game/main-game.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-smart-game',
  standalone: true,
  imports: [CommonModule, MainGameComponent],
  templateUrl: './smart-game.component.html',
})
export class SmartGameComponent {

}
