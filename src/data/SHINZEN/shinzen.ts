
import {Category, Class, PlayerData, Position, Type} from "@/types/PlayerData";

const createPlayer = (
  name: string,
  category: Category,
  position: Position,
  type: Type,
  rarity: Class,
  image: string,
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
    "/assets/SHINZEN/chigaya_eikichi.png",
  ),

  // 小鹿野大樹
  createPlayer(
    "小鹿野大樹",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    "/assets/SHINZEN/ogano_daiki.png",
  ),

  // 赤谷勇
  createPlayer(
    "赤谷勇",
    "ユニフォーム",
    "Li",
    "チョキ",
    "アイコニック",
    "/assets/SHINZEN/akatani_yu.png",
  ),

  // 児玉勝
  createPlayer(
    "児玉勝",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/SHINZEN/kodama_masaru.png",
  ),

  // 名栗翔太
  createPlayer(
    "名栗翔太",
    "ユニフォーム",
    "S",
    "チョキ",
    "アイコニック",
    "/assets/SHINZEN/naguri_shota.png",
  ),

  // 島府典明
  createPlayer(
    "島府典明",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/SHINZEN/shimafu_noriaki.png",
  ),

  // 吉川和孝
  createPlayer(
    "吉川和孝",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    "/assets/SHINZEN/yoshikawa_kazutaka.png",
  ),
];
