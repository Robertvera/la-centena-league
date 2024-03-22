import { Game } from "../interfaces/game.interface";
import { mapGameStats } from "../mappers";
import { supabase } from "../signals/supabase.signals";
import { GAMES_TABLE } from "./supabase.constants";

export const getLastGames = async (): Promise<Game[]> => {
  const { data } = await supabase.value
    .from(GAMES_TABLE)
    .select("*")
    .order("id", { ascending: false })
    .limit(6);

  if (data) {
    return mapGameStats(data);
  }

  return [];
};
