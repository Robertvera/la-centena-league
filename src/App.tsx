import "./App.css";
import { Header } from "./components/header.component";
import Modal from "./components/modal/modal.component";

import { activeTab } from "./signals/modal.signals";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { SelectPlayers } from "./components/modal/game-modal/select-players.component";
import { allPlayers, selectedPlayers } from "./signals/players.singals";
import { GameCheckout } from "./components/modal/game-modal/game-checkout.component";
import { errorMessage } from "./signals/error.signals";
import { ErrorSnackbar } from "./components/error.component";
import { TableTab } from "./components/table/table-tab.component";
import { Navbar } from "./components/navbar.component";
import { StatsTab } from "./components/stats/stats-tab.component";
import { useLoadLeague } from "./hooks/use-load-league.hook";
import { ModalTitle } from "components/modal/shared/modal-title.component";
import { leagueData } from "signals/league.signals";
import { LeaguePodium } from "components/modal/league-modal/league-podium.component";
import { FinishLeagueButton } from "components/modal/league-modal/finish-league-button.component";

function App() {
  const { fetching } = useLoadLeague();
  const isTableTab = activeTab.value === "table";
  const isStatsTab = activeTab.value === "stats";

  return (
    <>
      {errorMessage.value && <ErrorSnackbar error={errorMessage.value} />}
      <div className="flex flex-col h-full">
        <Header />
        <div className="container mx-auto overflow-auto form-container h-full">
          <div className="h-full">
            {isTableTab && <TableTab fetching={fetching} />}
            {isStatsTab && <StatsTab />}
          </div>
          <Modal type="game">
            <ModalTitle text="New Game" />
            <Swiper
              pagination={{ dynamicBullets: true }}
              modules={[Pagination]}
              className="mt-3"
            >
              <SwiperSlide>
                <SelectPlayers allPlayers={allPlayers.value} />
              </SwiperSlide>
              <SwiperSlide>
                <GameCheckout selectedPlayers={selectedPlayers.value} />
              </SwiperSlide>
            </Swiper>
          </Modal>
          <Modal type="league">
            <div className="flex flex-col justify-around h-full">
              <ModalTitle text={`League #${leagueData.value.id} finished 🎉`} />
              <LeaguePodium />
              <FinishLeagueButton />
            </div>
          </Modal>
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
