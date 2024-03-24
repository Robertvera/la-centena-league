import { supabase } from "../signals/supabase.signals";
import {
  INCREMENT_TARGET_SCORE_FN,
  LEAGUE_TABLE,
  PLAYER_TABLE,
  UPDATE_LEAGUE_SCORE_FN,
} from "./supabase.constants";

export const getActiveLeague = async () => {
  const { data } = await supabase.value
    .from(LEAGUE_TABLE)
    .select("*")
    .eq("finished", false)
    .single();

  return data;
};

export const updateLeagueTargetScore = async (
  leagueId: number,
  totalScore: number
) => {
  return await supabase.value.rpc(INCREMENT_TARGET_SCORE_FN, {
    current_league_id: leagueId,
    total_score: totalScore,
  });
};

export const finishLeague = async (
  leagueId: number,
  { winner, second, third }: { winner: string; second: string; third: string }
) => {
  const finishLeaguePromise = await supabase.value
    .from(LEAGUE_TABLE)
    .update({
      winner,
      second,
      third,
      finished: true,
      end: new Date().toISOString().toLocaleString(),
    })
    .eq("id", leagueId);

  const startNewLeaguePromise = await supabase.value.from(LEAGUE_TABLE).insert({
    points: 0,
    finished: false,
    start: new Date().toISOString().toLocaleString(),
  });

  const updateLeagueScorePromise = await supabase.value.rpc(
    UPDATE_LEAGUE_SCORE_FN,
    {
      winner_player: winner,
      second_player: second,
      third_player: third,
    }
  );

  const resetScoresPromise = await supabase.value
    .from(PLAYER_TABLE)
    .update({
      score: 0,
      first_position: 0,
      second_position: 0,
      third_position: 0,
      games: 0,
      mpr: 0,
      closed: 0,
      hat_trick: 0,
      nine_nine: 0,
      white_horse: 0,
      perfect: 0,
    })
    .gt("id", 0);

  return Promise.all([
    finishLeaguePromise,
    startNewLeaguePromise,
    updateLeagueScorePromise,
    resetScoresPromise,
  ]);
};
