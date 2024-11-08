export interface Hole {
  id: number;
  active: boolean;
}

export interface GameState {
    holes: Hole[];
    score: number;
    gameActive: boolean;
    timeLeft: number;
    highScores: { score: number; date: Date; }[];
  }