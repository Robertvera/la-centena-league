import { FC } from "react";
import { TARGET_SCORE } from "../../app.constants";
import { leagueData } from "../../signals/league.signals";

export const FinishLeague: FC = () => {
  const pointsToTarget = TARGET_SCORE - leagueData.value.points;
  const shouldButtonAppear = pointsToTarget <= 0;
  return (
    <div className="flex justify-center">
      {shouldButtonAppear && (
        <button className="rounded-lg p-4 bg-red-400 text-gray-50 font-bold">Finish League</button>
      )}
    </div>
  );
};
