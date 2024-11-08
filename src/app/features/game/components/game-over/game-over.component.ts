import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-over',
  standalone: true,
  imports: [],
  templateUrl: './game-over.component.html',
  styleUrl: './game-over.component.scss'
})
export class GameOverComponent {
  @Input() score: number | null = null;
  @Input() highScore: number | null = null;
  @Output() refreshGame: EventEmitter<void> = new EventEmitter();

  public tryAgainClicked(): void {
    this.refreshGame.emit();
  }
}
