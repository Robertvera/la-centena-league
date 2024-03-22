import { signal } from "@preact/signals-react";
import { Game } from "../interfaces/game.interface";

export const lastGames = signal<Game[]>([]);
