import { environment } from "../app.constants";

//TABLES
export const PLAYER_TABLE = `Player_League${environment ? `_${environment}` : ''}`;
export const GAMES_TABLE = `Games_League${environment ? `_${environment}` : ''}`;
export const LEAGUE_TABLE = `League${environment ? `_${environment}` : ''}`;

//SQL FUNCTIONS
export const INCREMENT_GAMES_COUNTER_FN = `incrementgamescounterleague${environment}`;
export const INCREMENT_SCORE_FN = `incrementscoreleague${environment}`;
export const UPDATE_MPR_FN = `updatempravgleague${environment}`;
export const INCREMENT_EXTRA_POINTS_FN = `incrementextrapointsleague${environment}`;
export const INCREMENT_POSITION_FN = `incrementpositionleague${environment}`;
export const INCREMENT_TARGET_SCORE_FN = `incrementtargetscoreleague${environment}`;