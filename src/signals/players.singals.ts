import { signal } from "@preact/signals-react";
import { Player } from "../interfaces/player.interface";
import { supabase } from "./supabase.signals";

export const allPlayers = signal<Player[]>([]);

export const selectedPlayers = signal<Player[]>([]);

export const getAllPlayers = async () => {
  const { data } = await supabase.value.from("Player_League").select("*");

  return data;
};

export const orderPlayersByScore = (players: Player[]): Player[] => {
  return players.sort((a, b) => b.score - a.score);
}
