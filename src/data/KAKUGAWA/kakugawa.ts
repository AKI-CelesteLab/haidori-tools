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
  school: "角川学園高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const kakugawa: PlayerData[] = [
  // 古牧譲
  createPlayer(
    "古牧譲",
    "ユニフォーム",
    "S",
    "グー",
    "アイコニック",
    Img.komaki,
  ),
  createPlayer(
    "【雪遊び】古牧譲",
    "雪遊び",
    "S",
    "パー",
    "アイコニック",
    Img.komaki_playingsnow,
  ),

  // 浅虫快人
  createPlayer(
    "浅虫快人",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.asamushi,
  ),

  // 南田大志
  createPlayer(
    "南田大志",
    "ユニフォーム",
    "Li",
    "グー",
    "アイコニック",
    Img.minamida,
  ),

  // 温川良明
  createPlayer(
    "温川良明",
    "ユニフォーム",
    "MB",
    "グー",
    "アイコニック",
    Img.nurukawa,
  ),

  // 稲垣功
  createPlayer(
    "稲垣功",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    Img.inagaki,
  ),

  // 馬門英治
  createPlayer(
    "馬門英治",
    "ユニフォーム",
    "MB",
    "グー",
    "アイコニック",
    Img.makado,
  ),

  // 百沢雄大
  createPlayer(
    "百沢雄大",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    Img.hyakuzawa,
  ),
  createPlayer(
    "【職業体験】百沢雄大",
    "職業体験",
    "WS",
    "チョキ",
    "アイコニック",
    Img.hyakuzawa_jobshadowing,
  ),
  createPlayer(
    "百沢雄大",
    "ユニフォーム",
    "WS",
    "グー",
    "スーパーアイコニック",
    Img.hyakuzawa_supericonic,
  ),
];
