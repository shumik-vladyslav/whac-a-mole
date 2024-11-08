import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartScreenComponent {
  @Input() highScore: number | null = null;
  @Output() startGame: EventEmitter<void> = new EventEmitter();

  public startGameClicked(): void {
    this.startGame.emit();
  }
}
