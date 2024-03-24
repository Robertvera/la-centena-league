import { signal } from "@preact/signals-react";

type ModalState = {
  isOpen: boolean;
};
export interface Modal {
  game: ModalState;
  player: ModalState;
  league: ModalState;
}

export const modalState = signal<Modal>({
  game: {
    isOpen: false,
  },
  player: {
    isOpen: false,
  },
  league: {
    isOpen: false,
  },
});

export const toggleModalState = (modalType: keyof Modal) => {
  modalState.value = {
    ...modalState.value,
    [modalType]: { isOpen: !modalState.value[modalType].isOpen },
  };
};

export const activeTab = signal<string>("table");

export const setActiveTab = (tab: string) => {
  activeTab.value = tab;
};
