import { GAME_CONSTANTS } from "../../constants/const";
import { Hole } from "../../models/game";

export interface GameState {
  holes: Hole[];
  score: number;
  highScore: number;
  gameActive: boolean;
  gameOver: boolean;
  timeLeft: number;
}

export const initialGameState: GameState = {
  holes: Array.from({ length: GAME_CONSTANTS.HOLE_COUNT }, (_, i) => ({ id: i, active: false })),
  highScore: 0,
  score: 0,
  gameActive: false,
  gameOver: false,
  timeLeft: 30
};