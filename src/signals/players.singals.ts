import { signal } from "@preact/signals-react";
import { Player } from "../interfaces/player.interface";

export const allPlayers = signal<Player[]>([]);

export const selectedPlayers = signal<Player[]>([]);

export const orderPlayersByAvgScore = (players: Player[]): Player[] => {
  return players
    .filter((player) => player.games >= 25)
    .sort((a, b) => b.avg - a.avg)
    .concat(
      players
        .filter((player) => player.games < 25)
        .sort((a, b) => b.avg - a.avg)
    );
};
