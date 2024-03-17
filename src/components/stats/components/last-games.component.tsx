import { FC } from "react";
import { lastGames } from "../../../signals/games.signals";

export const LastGames: FC = () => {
  return (
    <>
      <div className="w-100 m-2 p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded">
        <h1 className="text-white bg-gradient-to-r from-green-400 to-blue-500 text-center font-bold pb-2">
          Last games
        </h1>
        <div className="bg-white p-2 rounded flex flex-col">
          <div className="grid grid-cols-3 gap-4">
            {lastGames.value.map((lastGame, index) => {
              return (
                <div key={index}>
                  <h2 className="text-xs font-bold">Game #{lastGame.id}</h2>
                  <div className="flex flex-col">
                    {lastGame.game.map((player, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-row py-1 items-center"
                        >
                          <p>{player.position}-</p>
                          <p className="px-1">{player.playerName}</p>
                          <p className="text-xs px-1 font-bold">
                            {player.gamePoints}
                          </p>
                          <p className="text-xs font-bold text-green-600">
                            {player.gameMpr}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
