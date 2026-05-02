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
  school: "和久谷南高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const wakunan: PlayerData[] = [
  // 中島猛
  createPlayer(
    "中島猛",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.nakashima,
  ),
  createPlayer(
    "【スパイ】中島猛",
    "スパイ",
    "WS",
    "グー",
    "アイコニック",
    Img.nakashima_spy,
  ),

  // 白石優希
  createPlayer(
    "白石優希",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.shiroishi,
  ),

  // 花山一雅
  createPlayer(
    "花山一雅",
    "ユニフォーム",
    "S",
    "チョキ",
    "アイコニック",
    Img.hanayama,
  ),

  // 鳴子哲平
  createPlayer(
    "鳴子哲平",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    Img.naruko,
  ),

  // 秋保和光
  createPlayer(
    "秋保和光",
    "ユニフォーム",
    "Li",
    "チョキ",
    "アイコニック",
    Img.akiu,
  ),

  // 松島剛
  createPlayer(
    "松島剛",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    Img.matsushima,
  ),
  createPlayer(
    "【妖】松島剛",
    "妖",
    "MB",
    "グー",
    "アイコニック",
    Img.matsushima_ayakashi,
  ),

  // 川渡瞬己
  createPlayer(
    "川渡瞬己",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.kawatabi,
  ),
  createPlayer(
    "【サバゲ2】川渡瞬己",
    "サバゲ2",
    "WS",
    "チョキ",
    "アイコニック",
    Img.kawatabi_survivalgame2,
  ),
];
