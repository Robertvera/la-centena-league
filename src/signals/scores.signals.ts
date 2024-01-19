import { signal } from "@preact/signals-react";
import { GameScore } from "../interfaces/score.interface";

export const gameScore = signal<GameScore>([]);

export const createPlayerScoreSignal = (playerId: number) => {};

export const defaultScore = {
  player: {
    name: "Default Player",
    id: 1,
  },
  mpr: 0,
  position: 0,
  whiteHorse: false,
  nineNine: false,
  fullClosed: false,
  hatTrick: false,
  perfect: false,
  gamePoints: signal(0),
};

export const handleExtraPoints = (
  ev: React.MouseEvent<HTMLImageElement>,
  index: number
) => {
  switch (ev.currentTarget.id) {
    case "white-horse":
      gameScore.value[index].value.whiteHorse = !gameScore.value[index].value.whiteHorse;
      if (gameScore.value[index].value.whiteHorse) {
        gameScore.value[index].value.gamePoints.value += 3;
      } else {
        gameScore.value[index].value.gamePoints.value -= 3;
      }
      break;
    case "nine-nine":
      gameScore.value[index].value.nineNine = !gameScore.value[index].value.nineNine;
      if (gameScore.value[index].value.nineNine) {
        gameScore.value[index].value.gamePoints.value += 2;
      } else {
        gameScore.value[index].value.gamePoints.value -= 2;
      }
      break;
    case "full-closed":
      gameScore.value[index].value.fullClosed = !gameScore.value[index].value.fullClosed;
      if (gameScore.value[index].value.fullClosed) {
        gameScore.value[index].value.gamePoints.value += 1;
      } else {
        gameScore.value[index].value.gamePoints.value -= 1;
      }
      break;
    case "hat-trick":
      gameScore.value[index].value.hatTrick = !gameScore.value[index].value.hatTrick;
      if (gameScore.value[index].value.hatTrick) {
        gameScore.value[index].value.gamePoints.value += 2;
      } else {
        gameScore.value[index].value.gamePoints.value -= 2;
      }
      break;
    case "perfect":
      gameScore.value[index].value.perfect = !gameScore.value[index].value.perfect;
      if (gameScore.value[index].value.perfect) {
        gameScore.value[index].value.gamePoints.value += 3;
      } else {
        gameScore.value[index].value.gamePoints.value -= 3;
      }
      break;
    default:
      break;
  }
};
