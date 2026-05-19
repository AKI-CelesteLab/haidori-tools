
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
    "/assets/TSUBAKIHARA/himekawa_aoi.png",
  ),
  createPlayer(
    "【花火】姫川葵",
    "花火",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/TSUBAKIHARA/himekawa_aoi_fireworks.png",
  ),

  // 当間義友
  createPlayer(
    "当間義友",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    "/assets/TSUBAKIHARA/atema_yoshitomo.png",
  ),

  // 越後栄
  createPlayer(
    "越後栄",
    "ユニフォーム",
    "S",
    "パー",
    "アイコニック",
    "/assets/TSUBAKIHARA/echigo_sakae.png",
  ),

  // 貝掛亮文
  createPlayer(
    "貝掛亮文",
    "ユニフォーム",
    "Li",
    "パー",
    "アイコニック",
    "/assets/TSUBAKIHARA/kaikake_akifumi.png",
  ),

  // 丸山一喜
  createPlayer(
    "丸山一喜",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    "/assets/TSUBAKIHARA/maruyama_kazuki.png",
  ),

  // 舞子侑志
  createPlayer(
    "舞子侑志",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    "/assets/TSUBAKIHARA/maiko_yushi.png",
  ),

  // 寺泊基希
  createPlayer(
    "寺泊基希",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    "/assets/TSUBAKIHARA/teradomari_motoki.png",
  ),

  // 岩室橙吾
  createPlayer(
    "岩室橙吾",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    "/assets/TSUBAKIHARA/iwamuro_togo.png",
  ),
];
