import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hole } from '../../models/game';

@Component({
  selector: 'app-main-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-game.component.html',
  styleUrl: './main-game.component.scss',
})
export class MainGameComponent {
  @Input() holes: Hole[] | null = null;
  @Input() timeLeft: number | null = null;
  @Input() score: number | null = null;
  @Output() stopGame: EventEmitter<void> = new EventEmitter();
  @Output() whackHoleById : EventEmitter<number> = new EventEmitter();

  public whack(holeId: number): void {
    this.whackHoleById.emit(holeId);
  }

  public stopGameClicked(): void {
    this.stopGame.emit();
  }
}
