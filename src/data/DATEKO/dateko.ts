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
  school: "伊達工業高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const dateko: PlayerData[] = [
  // 青根高伸
  createPlayer(
    "青根高伸",
    "ユニフォーム",
    "MB",
    "グー",
    "アイコニック",
    Img.aone,
  ),
  createPlayer(
    "【制服】青根高伸",
    "制服",
    "MB",
    "グー",
    "アイコニック",
    Img.aone_uniform,
  ),
  createPlayer(
    "【プール掃除】青根高伸",
    "プール掃除",
    "MB",
    "パー",
    "アイコニック",
    Img.aone_poolcleaning,
  ),
  createPlayer(
    "【キャンプ】青根高伸",
    "キャンプ",
    "MB",
    "チョキ",
    "アイコニック",
    Img.aone_camp,
  ),
  createPlayer(
    "【甲冑】青根高伸",
    "甲冑",
    "MB",
    "パー",
    "アイコニック",
    Img.aone_armor,
  ),
  createPlayer(
    "【Xmas3】青根高伸",
    "Xmas3",
    "MB",
    "グー",
    "アイコニック",
    Img.aone_xmas3,
  ),
  createPlayer(
    "【甲冑】青根高伸",
    "甲冑",
    "MB",
    "パー",
    "スーパーアイコニック",
    Img.aone_armor_supericonic,
  ),

  // 二口堅治
  createPlayer(
    "二口堅治",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    Img.futakuchi,
  ),
  createPlayer(
    "【制服】二口堅治",
    "制服",
    "WS",
    "チョキ",
    "アイコニック",
    Img.futakuchi_uniform,
  ),
  createPlayer(
    "【プール掃除】二口堅治",
    "プール掃除",
    "WS",
    "グー",
    "アイコニック",
    Img.futakuchi_poolcleaning,
  ),
  createPlayer(
    "【路地裏】二口堅治",
    "路地裏",
    "WS",
    "パー",
    "アイコニック",
    Img.futakuchi_rojiura,
  ),
  createPlayer(
    "【甲冑】二口堅治",
    "甲冑",
    "WS",
    "チョキ",
    "アイコニック",
    Img.futakuchi_armor,
  ),
  createPlayer(
    "【2周年】二口堅治",
    "2周年",
    "WS",
    "グー",
    "アイコニック",
    Img.futakuchi_2nd,
  ),
  createPlayer(
    "【アート2】二口堅治",
    "アート2",
    "WS",
    "パー",
    "アイコニック",
    Img.futakuchi_art2,
  ),
  createPlayer(
    "【Xmas3】二口堅治",
    "Xmas3",
    "WS",
    "チョキ",
    "アイコニック",
    Img.futakuchi_xmas3,
  ),

  // 黄金川貫至
  createPlayer(
    "黄金川貫至",
    "ユニフォーム",
    "S",
    "グー",
    "アイコニック",
    Img.koganegawa,
  ),
  createPlayer(
    "【制服】黄金川貫至",
    "制服",
    "S",
    "グー",
    "アイコニック",
    Img.koganegawa_uniform,
  ),
  createPlayer(
    "【職業体験】黄金川貫至",
    "職業体験",
    "S",
    "パー",
    "アイコニック",
    Img.koganegawa_jobshadowing,
  ),
  createPlayer(
    "【スパイ】黄金川貫至",
    "スパイ",
    "S",
    "チョキ",
    "アイコニック",
    Img.koganegawa_spy,
  ),
  createPlayer(
    "【焼き芋】黄金川貫至",
    "焼き芋",
    "S",
    "グー",
    "アイコニック",
    Img.koganegawa_yakiimo,
  ),
  createPlayer(
    "黄金川貫至",
    "ユニフォーム",
    "S",
    "グー",
    "スーパーアイコニック",
    Img.koganegawa_supericonic,
  ),

  // 小原豊
  createPlayer(
    "小原豊",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    Img.obara,
  ),

  // 女川太郎
  createPlayer(
    "女川太郎",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    Img.onagawa,
  ),
  createPlayer(
    "【水着2】女川太郎",
    "水着2",
    "WS",
    "パー",
    "アイコニック",
    Img.onagawa_swimwear2,
  ),

  // 作並浩輔
  createPlayer(
    "作並浩輔",
    "ユニフォーム",
    "Li",
    "グー",
    "アイコニック",
    Img.sakunami,
  ),
  createPlayer(
    "【職業体験2】作並浩輔",
    "職業体験2",
    "Li",
    "パー",
    "アイコニック",
    Img.sakunami_jobshadowing2,
  ),

  // 吹上仁悟
  createPlayer(
    "吹上仁悟",
    "ユニフォーム",
    "MB",
    "グー",
    "アイコニック",
    Img.fukiage,
  ),

  // 茂庭要
  createPlayer(
    "茂庭要",
    "ユニフォーム",
    "S",
    "グー",
    "アイコニック",
    Img.moniwa,
  ),
  createPlayer(
    "【寝正月】茂庭要",
    "寝正月",
    "S",
    "パー",
    "アイコニック",
    Img.moniwa_lyinglow,
  ),

  // 鎌先靖志
  createPlayer(
    "鎌先靖志",
    "ユニフォーム",
    "MB",
    "グー",
    "アイコニック",
    Img.kamasaki,
  ),
  createPlayer(
    "【甲冑】鎌先靖志",
    "甲冑",
    "MB",
    "パー",
    "アイコニック",
    Img.kamasaki_armor,
  ),

  // 笹谷武仁
  createPlayer(
    "笹谷武仁",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    Img.sasaya,
  ),
];
