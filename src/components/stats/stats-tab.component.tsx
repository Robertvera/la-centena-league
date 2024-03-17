import { FC, useEffect } from "react";
import TopPositions from "./components/top-positions.component";
import TopExtraPoints from "./components/top-extra-points.component";
import { getLastGames, lastGames } from "../../signals/games.signals";
import { LastGames } from "./components/last-games.component";

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
