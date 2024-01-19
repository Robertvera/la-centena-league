import { FC } from "react";
import { Player } from "../../interfaces/player.interface";
import { selectedPlayers } from "../../signals/players.singals";
import { defaultScore, gameScore } from "../../signals/scores.signals";
import { signal } from "@preact/signals-react";

interface Props {
  allPlayers: Player[];
}

export const SelectPlayers: FC<Props> = ({ allPlayers }) => {
  const togglePlayer = (player: Player) => {
    if (selectedPlayers.value.includes(player)) {
      selectedPlayers.value = selectedPlayers.value.filter((p) => p !== player);
      gameScore.value = gameScore.value.filter(
        (score) => score.value.player !== player
      );
    } else {
      selectedPlayers.value = [...selectedPlayers.value, player];
      gameScore.value.push(
        signal({ ...defaultScore, player, gamePoints: signal(0) })
      );
    }
  };

  return (
    <div className="flex flex-col items-center overflow-y-auto h-full">
      {allPlayers.map((player, index) => (
        <div
          key={index}
          className={`m-2 p-4 border-2 rounded-full cursor-pointer w-1/2 text-center text-xl PlayerSelector ${
            selectedPlayers.value.includes(player)
              ? "bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold"
              : "bg-white text-black"
          }`}
          onClick={() => togglePlayer(player)}
        >
          {player.name}
        </div>
      ))}
    </div>
  );
};
