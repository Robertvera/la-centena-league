import { useEffect, useState } from "react";
import { getAllPlayers } from "../services/players.service";
import { allPlayers, orderPlayersByAvgScore } from "../signals/players.singals";
import { getActiveLeague } from "../services/league.service";
import { leagueData } from "../signals/league.signals";

export const useLoadLeague = () => {
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      const players = await getAllPlayers();

      if (players) {
        allPlayers.value = orderPlayersByAvgScore(players);
      }
    };

    const loadLeague = async () => {
      const league = await getActiveLeague();
      if (league) {
        leagueData.value = league;
      }
    };

    Promise.all([fetchPlayers(), loadLeague()]).then(() => setFetching(false));
  }, []);

  return { fetching };
};
