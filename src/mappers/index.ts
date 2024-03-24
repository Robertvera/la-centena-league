import { HistoricData, HistoricDataDto } from "interfaces/historic.interface";
import { Game, GameDto, PlayerStatsDto } from "../interfaces/game.interface";
import { Player, PlayerDto } from "../interfaces/player.interface";
import { gameScore } from "../signals/scores.signals";

const isValidGameMpr = (gameMpr: number | undefined | null): boolean => {
  return gameMpr !== undefined && gameMpr !== null && gameMpr <= 9;
};

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

export const mapGameStats = (lastFiveGames: GameDto[]): Game[] => {
  return lastFiveGames.map((game: GameDto) => {
    return {
      id: game.id,
      game: game.game_data.map((playerStats: PlayerStatsDto) => {
        return {
          avgMpr: playerStats.avg_mpr,
          gameMpr: playerStats.game_mpr,
          position: playerStats.position,
          hatTrick: playerStats.hat_trick,
          playerId: playerStats.player_id,
          fullClosed: playerStats.full_closed,
          gamePoints: playerStats.game_points,
          playerName: playerStats.player_name,
          whiteHorse: playerStats.white_horse,
          nineOfNine: playerStats.nine_of_nine,
          perfectGame: playerStats.perfect_game,
        };
      }),
    };
  });
};

export const mapPlayerData = (playerData: PlayerDto[]): Player[] => {
  return playerData.map((player) => {
    const avg = player.games ? player.score / player.games : 0;
    return {
      id: player.id,
      name: player.name,
      score: player.score,
      first_position: player.first_position,
      second_position: player.second_position,
      third_position: player.third_position,
      games: player.games,
      avg: +avg.toFixed(2),
      mpr: player.mpr,
      closed: player.closed,
      hat_trick: player.hat_trick,
      nine_nine: player.nine_nine,
      white_horse: player.white_horse,
      perfect: player.perfect,
      avatar: player.avatar,
    };
  });
};

export const mapHistoricData = (
  historicData: HistoricDataDto[]
): HistoricData[] => {
  return historicData.map((historic) => {
    const avg = historic.games ? historic.score / historic.games : 0;
    return {
      id: historic.id,
      name: historic.name,
      score: historic.score,
      first_position: historic.first_position,
      second_position: historic.second_position,
      third_position: historic.third_position,
      games: historic.games,
      avg: +avg.toFixed(2),
      mpr: historic.mpr,
      closed: historic.closed,
      hat_trick: historic.hat_trick,
      nine_nine: historic.nine_nine,
      white_horse: historic.white_horse,
      perfect: historic.perfect,
      leagues_won: historic.leagues_won,
      leagues_second: historic.leagues_second,
      leagues_third: historic.leagues_third,
    };
  });
};
