import { Player } from "interfaces/player.interface";
import { FC, useEffect } from "react";
import { gameScore, handleExtraPoints } from "signals/scores.signals";
import emptyFullClosed from "assets/images/closed-empty.svg";
import fullClosed from "assets/images/closed-full.svg";
import emptyHattrick from "assets/images/hattrick-empty.svg";
import hattrick from "assets/images/hattrick-full.svg";
import emptyNine from "assets/images/nine-empty.svg";
import nine from "assets/images/nine-full.svg";
import emptyHorse from "assets/images/white-horse-empty.svg";
import horse from "assets/images/white-horse-full.svg";
import emptyPerfect from "assets/images/perfect-empty.svg";
import perfect from "assets/images/perfect-full.svg";
import { NumberPicker } from "./number-picker.component";

interface Props {
  player: Player;
  position: number;
  index: number;
  positionPoints: number;
}

export const GameCheckoutPlayer: FC<Props> = ({
  player,
  position,
  index,
  positionPoints,
}) => {
  useEffect(() => {
    gameScore.value[index].value.gamePoints.value = positionPoints;
    gameScore.value[index].value.position = position;
  }, [positionPoints, index, position]);

  const getBadge = () => {
    switch (position) {
      case 1:
        return <span className="bg-yellow-400 rounded px-1"></span>;
      case 2:
        return <span className="bg-gray-400 rounded px-1"></span>;
      case 3:
        return <span className="bg-yellow-600 rounded px-1"></span>;
    }
  }

  return (
    <div className="m-2 p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded">
      <div className="bg-white p-2 rounded flex">
        <div className="text-2xl w-40">
          <p>{getBadge()}&nbsp;{player.name}</p>
          <p>{gameScore.value[index].value.gamePoints.value}</p>
        </div>
        <div className="w-full">
          <div className="flex justify-evenly">
            <img
              src={gameScore.value[index].value.fullClosed ? fullClosed : emptyFullClosed}
              alt="empty full closed"
              id="full-closed"
              width="40px"
              onClick={(ev) => handleExtraPoints(ev, index)}
            />
            <img
              src={gameScore.value[index].value.hatTrick ? hattrick : emptyHattrick}
              alt="empty hat trick"
              id="hat-trick"
              width="40px"
              onClick={(ev) => handleExtraPoints(ev, index)}
            />
            <img
              src={gameScore.value[index].value.nineNine ? nine : emptyNine}
              alt="empty nine"
              id="nine-nine"
              width="40px"
              onClick={(ev) => handleExtraPoints(ev, index)}
            />
            <img
              src={gameScore.value[index].value.whiteHorse ? horse : emptyHorse}
              alt="empty white horse"
              id="white-horse"
              width="40px"
              onClick={(ev) => handleExtraPoints(ev, index)}
            />
            <img
              src={gameScore.value[index].value.perfect ? perfect : emptyPerfect}
              alt="empty perfect"
              id="perfect"
              width="40px"
              onClick={(ev) => handleExtraPoints(ev, index)}
            />
          </div>
          <div className="flex mt-3">
            <NumberPicker index={index}/>
          </div>
        </div>
      </div>
    </div>
  );
};
