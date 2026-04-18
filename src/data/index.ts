import {PlayerData} from "@/types/PlayerData";
import {karasuno} from "./KARASUNO/karasuno";
import {nekoma} from "./NEKOMA/nekoma";
import {shiratorizawa} from "./SHIRATORIZAWA/shiratorizawa";
import {fukuroudani} from "./FUKUROUDANI/fukuroudani";
import {kamomedai} from "./KAMOMEDAI/kamomedai";

export const PLAYER_LIST: PlayerData[] = [
  ...karasuno,
  ...nekoma,
  ...shiratorizawa,
  ...fukuroudani,
  ...kamomedai,
];
