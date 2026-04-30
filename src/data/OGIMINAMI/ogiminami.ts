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
  school: "扇南高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const ogiminami: PlayerData[] = [
  // 十和田良樹
  createPlayer(
    "十和田良樹",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.towada,
  ),
  createPlayer(
    "十和田良樹",
    "ユニフォーム",
    "WS",
    "チョキ",
    "スーパーアイコニック",
    Img.towada_supericonic,
  ),

  // 森岳歩
  createPlayer(
    "森岳歩",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    Img.moritake,
  ),

  // 唐松拓巳
  createPlayer(
    "唐松拓巳",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.karamatsu,
  ),

  // 田沢裕樹
  createPlayer(
    "田沢裕樹",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.tazawa,
  ),

  // 小安颯真
  createPlayer(
    "小安颯真",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    Img.oyasu,
  ),
  createPlayer(
    "【サバゲ2】小安颯真",
    "サバゲ2",
    "MB",
    "グー",
    "アイコニック",
    Img.oyasu_survivalgame2,
  ),

  // 横手駿
  createPlayer(
    "横手駿",
    "ユニフォーム",
    "Li",
    "チョキ",
    "アイコニック",
    Img.yokote,
  ),

  // 夏瀬伊吹
  createPlayer(
    "夏瀬伊吹",
    "ユニフォーム",
    "S",
    "チョキ",
    "アイコニック",
    Img.natsuse,
  ),

  // 秋宮昇
  createPlayer(
    "秋宮昇",
    "ユニフォーム",
    "S",
    "チョキ",
    "アイコニック",
    Img.akimiya,
  ),
];
