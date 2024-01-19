import { FC } from "react";
import { toggleModalOpen } from "../../signals/modal.signals";

export const NewGameButton: FC = () => {
  return (
    <button onClick={toggleModalOpen} className="rounded-lg p-3 bg-green-400 text-gray-50 mt-3 mx-20">
      <div className="flex flex-col font-bold">
      NEW GAME
      </div>
    </button>
  );
};
