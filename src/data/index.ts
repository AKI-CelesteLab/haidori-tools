import {PlayerData} from "@/types/PlayerData";
import {karasuno} from "./烏野/karasuno";
import {nekoma} from "./音駒/nekoma";
import {shiratorizawa} from "./白鳥沢/shiratorizawa";
import {fukuroudani} from "./梟谷/fukuroudani";
import {kamomedai} from "./鴎台/kamomedai";

export const PLAYER_LIST: PlayerData[] = [
  ...karasuno,
  ...nekoma,
  ...shiratorizawa,
  ...fukuroudani,
  ...kamomedai,
];
