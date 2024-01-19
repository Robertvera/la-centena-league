import { signal } from "@preact/signals-react";

export const isModalOpen = signal<boolean>(false);

export const toggleModalOpen = () => {
  isModalOpen.value = !isModalOpen.value;
}

export const activeTab = signal<string>("table");

export const setActiveTab = (tab: string) => {
  activeTab.value = tab;
}