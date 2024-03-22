import { signal } from "@preact/signals-react";
import { Player } from "../interfaces/player.interface";

export const allPlayers = signal<Player[]>([]);

export const selectedPlayers = signal<Player[]>([]);

export const orderPlayersByScore = (players: Player[]): Player[] => {
  return players.sort((a, b) => b.score - a.score);
};

//write a function that order the players by avg score but the player must have at least 25 games played, the second criteria for ordering is the mpr. The players that have played less than 25 games should be also ordered by avg score
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
