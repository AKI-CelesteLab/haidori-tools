
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
    "/assets/ITACHIYAMA/sakusa_kiyoomi.png",
  ),
  createPlayer(
    "【サバゲ】佐久早聖臣",
    "サバゲ",
    "WS",
    "グー",
    "アイコニック",
    "/assets/ITACHIYAMA/sakusa_kiyoomi_survivalgame.png",
  ),
  createPlayer(
    "【新年2】佐久早聖臣",
    "新年2",
    "WS",
    "パー",
    "アイコニック",
    "/assets/ITACHIYAMA/sakusa_kiyoomi_newyear2.png",
  ),
  createPlayer(
    "【和装体験】佐久早聖臣",
    "和装体験",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/ITACHIYAMA/sakusa_kiyoomi_wasotaiken.png",
  ),

  // 古森元也
  createPlayer(
    "古森元也",
    "ユニフォーム",
    "Li",
    "チョキ",
    "アイコニック",
    "/assets/ITACHIYAMA/komori_motoya.png",
  ),
  createPlayer(
    "【キャンプ】古森元也",
    "キャンプ",
    "Li",
    "グー",
    "アイコニック",
    "/assets/ITACHIYAMA/komori_motoya_camp.png",
  ),
  createPlayer(
    "【ハロウィン】古森元也",
    "ハロウィン",
    "Li",
    "パー",
    "アイコニック",
    "/assets/ITACHIYAMA/komori_motoya_halloween.png",
  ),
];
