import { FC } from "react";
import { allPlayers } from "signals/players.singals";
import starGold from "assets/images/star-gold.svg";
import starSilver from "assets/images/star-silver.svg";
import starBronze from "assets/images/star-bronze.svg";

export const LeaguePodium: FC = () => {
  const sortedPlayers = allPlayers.value;
  const podiumPlayers = [sortedPlayers[2], sortedPlayers[0], sortedPlayers[1]];

  const stageHeight = (position: number) => {
    if (position === 1) {
      return "h-36";
    } else if (position === 2) {
      return "h-28";
    }

    return "h-24";
  };

  const starPosition = (position: number) => {
    if (position === 1) {
      return "mb-16";
    } else if (position === 2) {
      return "mb-8";
    }

    return "mb-4";
  };

  return (
    <>
      {sortedPlayers.length > 0 && (
        <div className="flex justify-center space-x-4 items-end mt-40  h-">
          {podiumPlayers.map((player, index) => {
            const position =
              sortedPlayers.findIndex((p) => p.id === player.id) + 1;

            return (
              <div
                key={player.id}
                className={`flex flex-col justify-end bg-gray-200 p-4 rounded-lg shadow-lg items-center ${stageHeight(
                  index
                )}`}
              >
                <img
                  src={player.avatar}
                  alt={player.name}
                  className={`w-20 h-20 rounded-full border border-blue-500`}
                />
                <img
                  src={
                    position === 1
                      ? starGold
                      : position === 2
                      ? starSilver
                      : starBronze
                  }
                  alt="star"
                  className={`${starPosition(position)} w-8 h-8`}
                />
                <div
                  className={`text-lg font-bold ${
                    index === 1 ? "text-green-500" : "text-blue-500"
                  }`}
                >
                  {position}
                </div>
                <div className="text-m">{player.name}</div>
                <div className="text-xs font-bold">{player.avg} pp</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
