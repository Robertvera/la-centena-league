import { allPlayers } from "../../signals/players.singals";
import { NewGameButton } from "./new-game-button.component";
import { Table } from "./table.component";

export const TableTab = () => {
  return (
    <>
      <div className="flex flex-col">
        <Table players={allPlayers.value} />
        <NewGameButton />
      </div>
    </>
  );
};
