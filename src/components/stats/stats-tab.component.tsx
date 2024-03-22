import { FC, useEffect } from "react";
import { lastGames } from "../../signals/games.signals";
import { LastGames } from "./components/last-games.component";
import { getLastGames } from "../../services/games.service";

export const StatsTab: FC = () => {
  useEffect(() => {
    const fetchGamesStats = async () => {
      const games = await getLastGames();

      if (games) {
        lastGames.value = games;
      }
    };

    fetchGamesStats();
  }, []);

  return (
    <>
      <div className="flex flex-col h-full">
        <LastGames />
        {/* <LastFive />
        <TopPositions />
        <TopExtraPoints /> */}
      </div>
    </>
  );
};
