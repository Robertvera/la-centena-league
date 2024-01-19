import { FC } from "react";
import { activeTab, setActiveTab } from "../signals/modal.signals";

export const Navbar: FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-green-400">
      <ul className="flex justify-around text-4xl py-4">
        <li
          className={`w-full text-center ${
            activeTab.value === "table" ? "text-shadow-lg shadow-blue-500" : ""
          } `}
          onClick={() => setActiveTab("table")}
        >
          🏆
        </li>
        <li
          className={`w-full text-center ${
            activeTab.value === "stats" ? "text-shadow-lg shadow-blue-500" : ""
          } `}
          onClick={() => setActiveTab("stats")}
        >
          📈
        </li>
      </ul>
    </nav>
  );
};
