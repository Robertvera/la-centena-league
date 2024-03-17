export type Game = {
  id: number;
  game: PlayerStats[];
}
export interface GameDto {
  id: number;
  game_data: PlayerStatsDto[];
};

export interface PlayerStatsDto {
  avg_mpr: number;
  game_mpr: number;
  position: number;
  hat_trick: boolean;
  player_id: number;
  full_closed: boolean;
  game_points: number;
  player_name: string;
  white_horse: boolean;
  nine_of_nine: boolean;
  perfect_game: boolean;
}

export interface PlayerStats {
  avgMpr: number;
  gameMpr: number;
  position: number;
  hatTrick: boolean;
  playerId: number;
  fullClosed: boolean;
  gamePoints: number;
  playerName: string;
  whiteHorse: boolean;
  nineOfNine: boolean;
  perfectGame: boolean;
}
