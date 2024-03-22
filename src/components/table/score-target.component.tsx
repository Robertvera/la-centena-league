import { FC } from "react";
import { leagueData } from "../../signals/league.signals";
import { TARGET_SCORE } from "../../app.constants";

export const ScoreTarget: FC = () => {
  const pointsToTarget = TARGET_SCORE - leagueData.value.points;

  return (
    <div className="mb-28 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-6xl font-bold text-center">{pointsToTarget}</h1>
      <h2 className=" text-sm font-bold text-center">POINTS REMAINING</h2>
    </div>
  );
};
