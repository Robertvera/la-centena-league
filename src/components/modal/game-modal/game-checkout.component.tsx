import { FC } from "react";
import { Player } from "../../../interfaces/player.interface";
import { GameCheckoutPlayer } from "./game-checkout-player.component";
import { mapGameScoreToSupabase } from "../../../mappers";
import { errorMessage } from "../../../signals/error.signals";
import { sendScore, updatePlayerStats } from "../../../services/score.service";
import { leagueData } from "../../../signals/league.signals";
import { updateLeagueTargetScore } from "../../../services/league.service";

interface Props {
  selectedPlayers: Player[];
}

export const GameCheckout: FC<Props> = ({ selectedPlayers }) => {
  const handleSend = async () => {
    const mappedGameScore = mapGameScoreToSupabase();

    if (!mappedGameScore) {
      errorMessage.value = "Error! MPR value not correct";
    } else {
      const totalPoints = mappedGameScore.reduce(
        (acc: number, score: any) => acc + score.game_points,
        0
      );

      await sendScore(mappedGameScore, leagueData.value.id);
      await updatePlayerStats(mappedGameScore);
      await updateLeagueTargetScore(leagueData.value.id, totalPoints);

      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="overflow-y-auto flex-grow">
        {selectedPlayers.map((player, index) => {
          const position = index + 1;
          const positionPoints = selectedPlayers.length - position;

          return (
            <GameCheckoutPlayer
              player={player}
              key={player.id}
              index={index}
              position={index + 1}
              positionPoints={positionPoints}
            />
          );
        })}
      </div>
      <button
        className="mt-auto mb-10 bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded"
        onClick={handleSend}
      >
        Save
      </button>
    </div>
  );
};
