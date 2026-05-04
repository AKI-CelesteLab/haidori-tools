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
    Img.shiramine,
  ),

  // 和倉久彦
  createPlayer(
    "和倉久彦",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    Img.wakura,
  ),

  // 金沢伊織
  createPlayer(
    "金沢伊織",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.kanazawa,
  ),

  // 志賀智也
  createPlayer(
    "志賀智也",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    Img.shiga,
  ),

  // 輪島友和
  createPlayer(
    "輪島友和",
    "ユニフォーム",
    "Li",
    "チョキ",
    "アイコニック",
    Img.wajima,
  ),

  // 深谷謙朗
  createPlayer(
    "深谷謙朗",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.fukatani,
  ),

  // 山代総司
  createPlayer(
    "山代総司",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.yamashiro,
  ),
];
