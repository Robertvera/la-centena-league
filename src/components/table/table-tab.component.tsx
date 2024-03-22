import { FC } from "react";
import { allPlayers } from "../../signals/players.singals";
import { NewGameButton } from "./new-game-button.component";
import { Table } from "./table.component";
import { ScoreTarget } from "./score-target.component";
import { FinishLeague } from "./finish-league.component";

interface TableTabProps {
  fetching: boolean;
}

export const TableTab: FC<TableTabProps> = ({ fetching }) => {
  return (
    <>
      {!fetching && (
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col">
            <Table players={allPlayers.value} />
            <NewGameButton />
          </div>
          <FinishLeague />
          <ScoreTarget />
        </div>
      )}
    </>
  );
};
