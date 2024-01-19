import { Signal } from "@preact/signals-react";
import { Player } from "./player.interface";

export interface Score {
  player: Player;
  mpr: number;
  position: number;
  whiteHorse: boolean;
  nineNine: boolean;
  fullClosed: boolean;
  hatTrick: boolean;
  perfect: boolean;
  gamePoints: Signal<number>;
}

export interface GameScoreSupabase {
  player_id: string;
  player_name: string;
  avg_mpr: number;
  game_mpr: number;
  game_points: number;
  full_closed: boolean;
  nine_of_nine: boolean;
  white_horse: boolean;
  hat_trick: boolean;
  perfect_game: boolean;
  position: number;
}

export type PlayerScore = Signal<Score>;

export type GameScore = PlayerScore[];