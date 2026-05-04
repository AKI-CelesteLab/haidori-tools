import * as Img from "./index";

import {Category, Class, PlayerData, Position, Type} from "@/types/PlayerData";
import {StaticImageData} from "next/image";

const createPlayer = (
  name: string,
  category: Category,
  position: Position,
  type: Type,
  rarity: Class,
  image: StaticImageData,
): PlayerData => ({
  name: name,
  category: category,
  school: "森然高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const shinzen: PlayerData[] = [
  // 千鹿谷栄吉
  createPlayer(
    "千鹿谷栄吉",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    Img.chigaya,
  ),

  // 小鹿野大樹
  createPlayer(
    "小鹿野大樹",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.ogano,
  ),

  // 赤谷勇
  createPlayer(
    "赤谷勇",
    "ユニフォーム",
    "Li",
    "チョキ",
    "アイコニック",
    Img.akatani,
  ),

  // 児玉勝
  createPlayer(
    "児玉勝",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.kodama,
  ),

  // 名栗翔太
  createPlayer(
    "名栗翔太",
    "ユニフォーム",
    "S",
    "チョキ",
    "アイコニック",
    Img.naguri,
  ),

  // 島府典明
  createPlayer(
    "島府典明",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.shimafu,
  ),

  // 吉川和孝
  createPlayer(
    "吉川和孝",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    Img.yoshikawa,
  ),
];
