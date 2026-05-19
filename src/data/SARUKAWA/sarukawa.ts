
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
  school: "早流川工業高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const sarukawa: PlayerData[] = [
  // 白峰周
  createPlayer(
    "白峰周",
    "ユニフォーム",
    "S",
    "チョキ",
    "アイコニック",
    "/assets/SARUKAWA/shiramine_itaru.png",
  ),

  // 和倉久彦
  createPlayer(
    "和倉久彦",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    "/assets/SARUKAWA/wakura_hisahiko.png",
  ),

  // 金沢伊織
  createPlayer(
    "金沢伊織",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/SARUKAWA/kanazawa_iori.png",
  ),

  // 志賀智也
  createPlayer(
    "志賀智也",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    "/assets/SARUKAWA/shiga_tomonari.png",
  ),

  // 輪島友和
  createPlayer(
    "輪島友和",
    "ユニフォーム",
    "Li",
    "チョキ",
    "アイコニック",
    "/assets/SARUKAWA/wajima_tomokazu.png",
  ),

  // 深谷謙朗
  createPlayer(
    "深谷謙朗",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/SARUKAWA/fukatani_kenro.png",
  ),

  // 山代総司
  createPlayer(
    "山代総司",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/SARUKAWA/yamashiro_soji.png",
  ),
];
