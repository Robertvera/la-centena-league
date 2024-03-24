import { FC } from "react";
import { finishLeague } from "services/league.service";
import { leagueData } from "signals/league.signals";
import { allPlayers } from "signals/players.singals";

export const FinishLeagueButton: FC = () => {
  const handleFinishLeague = async () => {
    const winnerPlayers = allPlayers.value.slice(0, 3);

    await finishLeague(leagueData.value.id, {
      winner: winnerPlayers[0].name,
      second: winnerPlayers[1].name,
      third: winnerPlayers[2].name,
    });

    window.location.reload();
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleFinishLeague}
        className="rounded-lg p-4 bg-red-400 text-gray-50 font-bold"
      >
        Finish and restart League
      </button>
    </div>
  );
};
