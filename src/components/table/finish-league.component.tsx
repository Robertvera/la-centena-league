import { FC } from "react";
import { TARGET_SCORE } from "../../app.constants";
import { leagueData } from "../../signals/league.signals";
import { toggleModalState } from "../../signals/modal.signals";

export const FinishLeague: FC = () => {
  const pointsToTarget = TARGET_SCORE - leagueData.value.points;
  const shouldButtonAppear = pointsToTarget <= 0;

  const handleFinishLeague = () => {
    toggleModalState("league");
  };

  return (
    <div className="flex justify-center">
      {shouldButtonAppear && (
        <button
          onClick={handleFinishLeague}
          className="rounded-lg p-4 bg-red-400 text-gray-50 font-bold"
        >
          Finish League
        </button>
      )}
    </div>
  );
};
