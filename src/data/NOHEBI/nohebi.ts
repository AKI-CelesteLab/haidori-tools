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
  school: "戸美学園高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const nohebi: PlayerData[] = [
  // 大将優
  createPlayer(
    "大将優",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.daisho,
  ),
  createPlayer(
    "【新年】大将優",
    "新年",
    "WS",
    "チョキ",
    "アイコニック",
    Img.daisho_newyear,
  ),
  createPlayer(
    "【カンフー】大将優",
    "カンフー",
    "WS",
    "グー",
    "アイコニック",
    Img.daisho_kungfu,
  ),
  createPlayer(
    "【妖】大将優",
    "妖",
    "WS",
    "パー",
    "アイコニック",
    Img.daisho_ayakashi,
  ),

  // 沼井和馬
  createPlayer(
    "沼井和馬",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.numai,
  ),

  // 潜尚保
  createPlayer(
    "潜尚保",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.kuguri,
  ),
  createPlayer(
    "【バーガー】潜尚保",
    "バーガー",
    "WS",
    "チョキ",
    "アイコニック",
    Img.kuguri_burgur,
  ),
  createPlayer(
    "【寝正月】潜尚保",
    "寝正月",
    "WS",
    "グー",
    "アイコニック",
    Img.kuguri_lyinglow,
  ),

  // 高千穂恵也
  createPlayer(
    "高千穂恵也",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    Img.takachiho,
  ),

  // 広尾倖児
  createPlayer(
    "広尾倖児",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    Img.hiroo,
  ),
  createPlayer(
    "【カンフー】広尾倖児",
    "カンフー",
    "MB",
    "チョキ",
    "アイコニック",
    Img.hiroo_kungfu,
  ),

  // 先島伊澄
  createPlayer(
    "先島伊澄",
    "ユニフォーム",
    "S",
    "パー",
    "アイコニック",
    Img.sakishima,
  ),
  createPlayer(
    "先島伊澄",
    "ユニフォーム",
    "S",
    "パー",
    "スーパーアイコニック",
    Img.sakishima_supericonic,
  ),

  // 背黒晃彦
  createPlayer(
    "背黒晃彦",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    Img.seguro,
  ),

  // 赤間颯
  createPlayer(
    "赤間颯",
    "ユニフォーム",
    "Li",
    "パー",
    "アイコニック",
    Img.akama,
  ),
];
