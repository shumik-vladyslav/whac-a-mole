import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-game.component.html',
  styleUrl: './main-game.component.scss',
})
export class MainGameComponent {
  @Input() holes = Array(9)
    .fill(0)
    .map((_, i) => {
      if (i === 5) return  { id: i, active: true };
      return { id: i, active: false };
    });
}
