import "./App.css";
import { Header } from "./components/header.component";
import Modal from "./components/modal/modal.component";
import { ModalTitle } from "./components/modal/modal-title.component";
import { activeTab, isModalOpen } from "./signals/modal.signals";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { SelectPlayers } from "./components/modal/select-players.component";
import {
  allPlayers,
  getAllPlayers,
  orderPlayersByScore,
  selectedPlayers,
} from "./signals/players.singals";
import { GameCheckout } from "./components/modal/game-checkout.component";
import { useEffect } from "react";
import { errorMessage } from "./signals/error.signals";
import { ErrorSnackbar } from "./components/error.component";
import { TableTab } from "./components/table/table-tab.component";
import { Navbar } from "./components/navbar.component";
import { StatsTab } from "./components/stats/stats-tab.component";

function App() {
  useEffect(() => {
    const fetchPlayers = async () => {
      const players = await getAllPlayers();

      if (players) {
        allPlayers.value = orderPlayersByScore(players);
      }
    };

    fetchPlayers();
  }, []);

  const isTableTab = activeTab.value === "table";
  const isStatsTab = activeTab.value === "stats";

  return (
    <>
      {errorMessage.value && <ErrorSnackbar error={errorMessage.value} />}
      <Header />
      <div className="container mx-auto overflow-auto form-container h-full">
        <div className="h-full">
          {isTableTab && <TableTab />}
          {isStatsTab && <StatsTab />}
        </div>
        <Navbar />
        <Modal isOpen={isModalOpen}>
          <ModalTitle />
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
      </div>
    </>
  );
}

export default App;
