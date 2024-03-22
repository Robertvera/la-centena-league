import { supabase } from "../signals/supabase.signals";
import { INCREMENT_TARGET_SCORE_FN, LEAGUE_TABLE } from "./supabase.constants";

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
