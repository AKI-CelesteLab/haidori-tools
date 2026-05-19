
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
  school: "生川高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const ubugawa: PlayerData[] = [
  // 強羅昌己
  createPlayer(
    "強羅昌己",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    "/assets/UBUGAWA/gora_masaki.png",
  ),

  // 芦谷洋平
  createPlayer(
    "芦谷洋平",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/UBUGAWA/ashiya_yohei.png",
  ),

  // 仙石伸吾
  createPlayer(
    "仙石伸吾",
    "ユニフォーム",
    "MB",
    "グー",
    "アイコニック",
    "/assets/UBUGAWA/sengoku_shingo.png",
  ),

  // 中川俊美
  createPlayer(
    "中川俊美",
    "ユニフォーム",
    "Li",
    "グー",
    "アイコニック",
    "/assets/UBUGAWA/nakagawa_toshimi.png",
  ),

  // 七沢健吾
  createPlayer(
    "七沢健吾",
    "ユニフォーム",
    "S",
    "グー",
    "アイコニック",
    "/assets/UBUGAWA/nanasawa_kengo.png",
  ),

  // 伊勢原裕次
  createPlayer(
    "伊勢原裕次",
    "ユニフォーム",
    "MB",
    "グー",
    "アイコニック",
    "/assets/UBUGAWA/isehara_yuji.png",
  ),

  // 湯河浩二
  createPlayer(
    "湯河浩二",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    "/assets/UBUGAWA/yukawa_koji.png",
  ),
];
