import { signal } from "@preact/signals-react";
import { supabase } from "./supabase.signals";
import { Game } from "../interfaces/game.interface";
import { mapGameStats } from "../mappers";

export const lastGames = signal<Game[]>([]);

export const getLastGames = async (): Promise<Game[]> => {
  const { data } = await supabase.value
    .from("Games_League")
    .select("*")
    .order("id", { ascending: false })
    .limit(6);

  if (data) {
    return mapGameStats(data);
  }

  return [];
};
