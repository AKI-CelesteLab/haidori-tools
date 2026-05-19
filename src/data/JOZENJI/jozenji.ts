
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
  school: "条善寺高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const jozenji: PlayerData[] = [
  // 照島遊児
  createPlayer(
    "照島遊児",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    "/assets/JOZENJI/terushima_yuji.png",
  ),
  createPlayer(
    "【制服】照島遊児",
    "制服",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/JOZENJI/terushima_yuji_uniform.png",
  ),
  createPlayer(
    "【雪遊び】照島遊児",
    "雪遊び",
    "WS",
    "グー",
    "アイコニック",
    "/assets/JOZENJI/terushima_yuji_playingsnow.png",
  ),
  createPlayer(
    "【スパイ】照島遊児",
    "スパイ",
    "WS",
    "パー",
    "アイコニック",
    "/assets/JOZENJI/terushima_yuji_spy.png",
  ),
  createPlayer(
    "【妖】照島遊児",
    "妖",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/JOZENJI/terushima_yuji_ayakashi.png",
  ),
  createPlayer(
    "【格ゲー】照島遊児",
    "格ゲー",
    "WS",
    "グー",
    "アイコニック",
    "/assets/JOZENJI/terushima_yuji_fightinggame.png",
  ),

  // 母畑和馬
  createPlayer(
    "母畑和馬",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    "/assets/JOZENJI/bobata_kazuma.png",
  ),
  createPlayer(
    "【アート2】母畑和馬",
    "アート2",
    "MB",
    "パー",
    "アイコニック",
    "/assets/JOZENJI/bobata_kazuma_art2.png",
  ),
  createPlayer(
    "【アート2】母畑和馬",
    "アート2",
    "MB",
    "パー",
    "スーパーアイコニック",
    "/assets/JOZENJI/bobata_kazuma_art2_supericonic.png",
  ),

  // 二岐丈春
  createPlayer(
    "二岐丈春",
    "ユニフォーム",
    "S",
    "グー",
    "アイコニック",
    "/assets/JOZENJI/futamata_takeharu.png",
  ),
  createPlayer(
    "【制服】二岐丈春",
    "制服",
    "S",
    "パー",
    "アイコニック",
    "/assets/JOZENJI/futamata_takeharu_uniform.png",
  ),

  // 沼尻凛太郎
  createPlayer(
    "沼尻凛太郎",
    "ユニフォーム",
    "WS",
    "グー",
    "アイコニック",
    "/assets/JOZENJI/numajiri_rintaro.png",
  ),

  // 飯坂信義
  createPlayer(
    "津坂信義",
    "ユニフォーム",
    "MB",
    "パー",
    "アイコニック",
    "/assets/JOZENJI/iizaka_nobuyoshi.png",
  ),

  // 東山勝道
  createPlayer(
    "東山勝道",
    "ユニフォーム",
    "WS",
    "パー",
    "アイコニック",
    "/assets/JOZENJI/higashiyama_katsumichi.png",
  ),

  // 土湯新
  createPlayer(
    "土湯新",
    "ユニフォーム",
    "Li",
    "パー",
    "アイコニック",
    "/assets/JOZENJI/tsuchiyu_arata.png",
  ),
];
