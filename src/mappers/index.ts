import { gameScore } from "../signals/scores.signals";

const isValidGameMpr = (gameMpr: number | undefined | null): boolean => {
  return gameMpr !== undefined && gameMpr !== null && gameMpr <= 9;
}

export const mapGameScoreToSupabase = (): any => {
  const mappedGameScore = gameScore.value.map((score) => {
    if (!isValidGameMpr(score.value.mpr)) {
      return null;
    }

    return {
      player_id: score.value.player.id,
      player_name: score.value.player.name,
      avg_mpr: score.value.player.mpr,
      game_mpr: score.value.mpr,
      game_points: score.value.gamePoints.value,
      full_closed: score.value.fullClosed,
      nine_of_nine: score.value.nineNine,
      white_horse: score.value.whiteHorse,
      hat_trick: score.value.hatTrick,
      perfect_game: score.value.perfect,
      position: score.value.position,
    };
  });

  if (mappedGameScore.some((score) => score === null)) {
    return null;
  }

  return mappedGameScore;
};
