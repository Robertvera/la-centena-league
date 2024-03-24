import { signal } from "@preact/signals-react";
import { HistoricData } from "interfaces/historic.interface";

export const historicData = signal<HistoricData[]>([]);