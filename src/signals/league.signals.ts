import { signal } from "@preact/signals-react";
import { League } from "../interfaces/league.interface";

export const leagueData = signal<League>({
  id: 0,
  winner: "",
  runner: "",
  points: 0,
  finished: false,
});
