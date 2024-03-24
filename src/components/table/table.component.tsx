import { FC } from "react";
import { Player } from "../../interfaces/player.interface";
import { historicData } from "signals/historic.signals";
import starGold from "assets/images/star-gold.svg";

interface Props {
  players: Player[];
}

export const Table: FC<Props> = ({ players }) => {
  return (
    <table
      className="w-full table-fixed text-lg"
      cellPadding="0"
      cellSpacing="0"
    >
      <tbody>
        <tr className="bg-gradient-to-r from-green-400 to-blue-500 text-gray-50">
          <th className="w-6"></th>
          <th className="w-28"></th>
          <th>Pts</th>
          <th>Wins</th>
          <th>Games</th>
          <th>Avg</th>
          <th>MPR</th>
        </tr>
        {players?.map((player, index) => {
          const { id, name, score, first_position, games, mpr } = player;
          const avg = score / games;
          const position = index + 1;

          const isNotConsolidated = games < 25;
          const consolidatedClass = isNotConsolidated ? "text-red-500" : "";
          const leaguesWon =
            historicData.value.find((player) => player.id === id)
              ?.leagues_won || 0;

          return (
            <tr key={id} className="border-y border-slate-400">
              <td className="text-center font-bold bg-green-400">{position}</td>
              <td className={`${consolidatedClass} font-bold px-2 bg-white flex items-center`}>
                {name}
                <div className="ml-1">
                  { leaguesWon > 0 && Array.from({ length: leaguesWon }).map((_, index) => (
                    <img src={starGold} alt="star" className="w-2 h-2" key={index} />
                  ))}
                </div>
              </td>
              <td className={`${consolidatedClass} text-center bg-gray-200`}>
                {score}
              </td>
              <td className={`${consolidatedClass} text-center bg-white`}>
                {first_position}
              </td>
              <td className={`${consolidatedClass} text-center bg-gray-200`}>
                {games}
              </td>
              <td className={`${consolidatedClass} text-center bg-white`}>
                {avg ? avg.toFixed(2) : 0}
              </td>
              <td className={`${consolidatedClass} text-center bg-gray-200`}>
                {mpr.toFixed(2)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
