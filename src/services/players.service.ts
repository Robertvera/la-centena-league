import { PlayerDto } from "../interfaces/player.interface";
import { mapPlayerData } from "../mappers";
import { supabase } from "../signals/supabase.signals";
import { PLAYER_TABLE } from "./supabase.constants";

export const getAllPlayers = async () => {
  const { data } = await supabase.value.from(PLAYER_TABLE).select("*");

  return mapPlayerData(data as PlayerDto[]);
};
