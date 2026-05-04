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
  school: "井闥山学院高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const itachiyama: PlayerData[] = [
  // 佐久早聖臣
  createPlayer(
    "佐久早聖臣",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.sakusa,
  ),
  createPlayer(
    "【サバゲ】佐久早聖臣",
    "サバゲ",
    "WS",
    "グー",
    "アイコニック",
    Img.sakusa_survivalgame,
  ),
  createPlayer(
    "【新年2】佐久早聖臣",
    "新年2",
    "WS",
    "パー",
    "アイコニック",
    Img.sakusa_newyear2,
  ),
  createPlayer(
    "【和装体験】佐久早聖臣",
    "和装体験",
    "WS",
    "チョキ",
    "アイコニック",
    Img.sakusa_wasotaiken,
  ),

  // 古森元也
  createPlayer(
    "古森元也",
    "ユニフォーム",
    "Li",
    "チョキ",
    "アイコニック",
    Img.komori,
  ),
  createPlayer(
    "【キャンプ】古森元也",
    "キャンプ",
    "Li",
    "グー",
    "アイコニック",
    Img.komori_camp,
  ),
  createPlayer(
    "【ハロウィン】古森元也",
    "ハロウィン",
    "Li",
    "パー",
    "アイコニック",
    Img.komori_halloween,
  ),
];
