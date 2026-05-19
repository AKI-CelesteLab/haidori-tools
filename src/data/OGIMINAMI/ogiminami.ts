
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
    "/assets/OGIMINAMI/towada_yoshiki.png",
  ),
  createPlayer(
    "十和田良樹",
    "ユニフォーム",
    "WS",
    "チョキ",
    "スーパーアイコニック",
    "/assets/OGIMINAMI/towada_yoshiki_supericonic.png",
  ),

  // 森岳歩
  createPlayer(
    "森岳歩",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    "/assets/OGIMINAMI/moritake_ayumu.png",
  ),

  // 唐松拓巳
  createPlayer(
    "唐松拓巳",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    "/assets/OGIMINAMI/karamatsu_takumi.png",
  ),

  // 田沢裕樹
  createPlayer(
    "田沢裕樹",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/OGIMINAMI/tazawa_yuki.png",
  ),

  // 小安颯真
  createPlayer(
    "小安颯真",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    "/assets/OGIMINAMI/oyasu_soma.png",
  ),
  createPlayer(
    "【サバゲ2】小安颯真",
    "サバゲ2",
    "MB",
    "グー",
    "アイコニック",
    "/assets/OGIMINAMI/oyasu_soma_survivalgame2.png",
  ),

  // 横手駿
  createPlayer(
    "横手駿",
    "ユニフォーム",
    "Li",
    "チョキ",
    "アイコニック",
    "/assets/OGIMINAMI/yokote_shun.png",
  ),

  // 夏瀬伊吹
  createPlayer(
    "夏瀬伊吹",
    "ユニフォーム",
    "S",
    "チョキ",
    "アイコニック",
    "/assets/OGIMINAMI/natsuse_ibuki.png",
  ),

  // 秋宮昇
  createPlayer(
    "秋宮昇",
    "ユニフォーム",
    "S",
    "チョキ",
    "アイコニック",
    "/assets/OGIMINAMI/akimiya_noboru.png",
  ),
];
