import { GameScoreSupabase } from "../interfaces/score.interface";
import { supabase } from "../signals/supabase.signals";
import {
  GAMES_TABLE,
  INCREMENT_EXTRA_POINTS_FN,
  INCREMENT_GAMES_COUNTER_FN,
  INCREMENT_POSITION_FN,
  INCREMENT_SCORE_FN,
  UPDATE_MPR_FN,
} from "./supabase.constants";

export const sendScore = async (
  mappedGameScore: GameScoreSupabase[],
  leagueId: number
) => {
  return await supabase.value
    .from(GAMES_TABLE)
    .insert({ game_data: mappedGameScore, league_id: leagueId })
    .select();
};

export const updatePlayerStats = async (
  mappedGameScore: GameScoreSupabase[]
) => {
  const promises = mappedGameScore.map(async (playerGameScore) => {
    const gamesIncrement = await supabase.value.rpc(
      INCREMENT_GAMES_COUNTER_FN,
      {
        player: playerGameScore.player_name,
      }
    );

    const scoreIncrement = await supabase.value.rpc(INCREMENT_SCORE_FN, {
      player: playerGameScore.player_name,
      game_score: playerGameScore.game_points,
    });

    const mprIncrement = await supabase.value.rpc(UPDATE_MPR_FN, {
      player_name: playerGameScore.player_name,
      game_mpr: playerGameScore.game_mpr,
    });

    const extraPointsIncrement = await supabase.value.rpc(
      INCREMENT_EXTRA_POINTS_FN,
      {
        player: playerGameScore.player_name,
        is_full_closed: playerGameScore.full_closed,
        is_nine_of_nine: playerGameScore.nine_of_nine,
        is_white_horse: playerGameScore.white_horse,
        is_hat_trick: playerGameScore.hat_trick,
        is_perfect_game: playerGameScore.perfect_game,
      }
    );

    const positionIncrement = await supabase.value.rpc(INCREMENT_POSITION_FN, {
      player: playerGameScore.player_name,
      is_first_position: playerGameScore.position === 1,
      is_second_position: playerGameScore.position === 2,
      is_third_position: playerGameScore.position === 3,
    });

    return Promise.all([
      gamesIncrement,
      scoreIncrement,
      mprIncrement,
      extraPointsIncrement,
      positionIncrement,
    ]);
  });

  await Promise.all(promises);
};
