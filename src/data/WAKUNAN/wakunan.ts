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
    "/assets/WAKUNAN/nakashima_takeru.png",
  ),
  createPlayer(
    "【スパイ】中島猛",
    "スパイ",
    "WS",
    "グー",
    "アイコニック",
    "/assets/WAKUNAN/nakashima_takeru_spy.png",
  ),
  createPlayer(
    "中島猛",
    "ユニフォーム",
    "WS",
    "チョキ",
    "スーパーアイコニック",
    "/assets/WAKUNAN/nakashima_takeru_supericonic.png",
  ),

  // 白石優希
  createPlayer(
    "白石優希",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    "/assets/WAKUNAN/shiroishi_yuki.png",
  ),

  // 花山一雅
  createPlayer(
    "花山一雅",
    "ユニフォーム",
    "S",
    "チョキ",
    "アイコニック",
    "/assets/WAKUNAN/hanayama_kazumasa.png",
  ),

  // 鳴子哲平
  createPlayer(
    "鳴子哲平",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    "/assets/WAKUNAN/naruko_teppei.png",
  ),

  // 秋保和光
  createPlayer(
    "秋保和光",
    "ユニフォーム",
    "Li",
    "チョキ",
    "アイコニック",
    "/assets/WAKUNAN/akiu_kazuteru.png",
  ),

  // 松島剛
  createPlayer(
    "松島剛",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    "/assets/WAKUNAN/matsushima_tsuyoshi.png",
  ),
  createPlayer(
    "【妖】松島剛",
    "妖",
    "MB",
    "グー",
    "アイコニック",
    "/assets/WAKUNAN/matsushima_tsuyoshi_ayakashi.png",
  ),

  // 川渡瞬己
  createPlayer(
    "川渡瞬己",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/WAKUNAN/kawatabi_shunki.png",
  ),
  createPlayer(
    "【サバゲ2】川渡瞬己",
    "サバゲ2",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/WAKUNAN/kawatabi_shunki_survivalgame2.png",
  ),
];
