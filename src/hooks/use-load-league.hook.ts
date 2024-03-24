import { useEffect, useState } from "react";
import { getAllPlayers } from "../services/players.service";
import { allPlayers, orderPlayersByAvgScore } from "../signals/players.singals";
import { getActiveLeague } from "../services/league.service";
import { leagueData } from "../signals/league.signals";
import { getHistoricData } from "services/historic.service";
import { historicData } from "signals/historic.signals";

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

    const fetchHistoricData = async () => {
      const historic = await getHistoricData();

      if (historic) {
        historicData.value = historic;
      }
    };

    Promise.all([fetchPlayers(), loadLeague(), fetchHistoricData()]).then(() =>
      setFetching(false)
    );
  }, []);

  return { fetching };
};
