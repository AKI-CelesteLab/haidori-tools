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
  school: "椿原学園高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const tsubakihara: PlayerData[] = [
  // 姫川葵
  createPlayer(
    "姫川葵",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.himekawa,
  ),
  createPlayer(
    "【花火】姫川葵",
    "花火",
    "WS",
    "チョキ",
    "アイコニック",
    Img.himekawa_fireworks,
  ),

  // 当間義友
  createPlayer(
    "当間義友",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    Img.atema,
  ),

  // 越後栄
  createPlayer(
    "越後栄",
    "ユニフォーム",
    "S",
    "パー",
    "アイコニック",
    Img.echigo,
  ),

  // 貝掛亮文
  createPlayer(
    "貝掛亮文",
    "ユニフォーム",
    "Li",
    "パー",
    "アイコニック",
    Img.kaikake,
  ),

  // 丸山一喜
  createPlayer(
    "丸山一喜",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    Img.maruyama,
  ),

  // 舞子侑志
  createPlayer(
    "舞子侑志",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.maiko,
  ),

  // 寺泊基希
  createPlayer(
    "寺泊基希",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.teradomari,
  ),

  // 岩室橙吾
  createPlayer(
    "岩室橙吾",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    Img.iwamuro,
  ),
];
