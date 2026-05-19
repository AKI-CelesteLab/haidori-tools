
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
  school: "鴎台高校",
  position: position,
  type: type,
  class: rarity,
  image: image,
});

export const kamomedai: PlayerData[] = [
  // 星海光来
  createPlayer(
    "星海光来",
    "ユニフォーム",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/KAMOMEDAI/hoshiumi_korai.png",
  ),
  createPlayer(
    "【文化祭】星海光来",
    "文化祭",
    "WS",
    "グー",
    "アイコニック",
    "/assets/KAMOMEDAI/hoshiumi_korai_culturefestival.png",
  ),
  createPlayer(
    "【サバゲ】星海光来",
    "サバゲ",
    "WS",
    "パー",
    "アイコニック",
    "/assets/KAMOMEDAI/hoshiumi_korai_survivalgame.png",
  ),
  createPlayer(
    "【花火】星海光来",
    "花火",
    "WS",
    "チョキ",
    "アイコニック",
    "/assets/KAMOMEDAI/hoshiumi_korai_fireworks.png",
  ),
  createPlayer(
    "【新年2】星海光来",
    "新年2",
    "WS",
    "グー",
    "アイコニック",
    "/assets/KAMOMEDAI/hoshiumi_korai_newyear2.png",
  ),
  createPlayer(
    "【格ゲー】星海光来",
    "格ゲー",
    "WS",
    "パー",
    "アイコニック",
    "/assets/KAMOMEDAI/hoshiumi_korai_fightinggame.png",
  ),

  // 昼神幸郎
  createPlayer(
    "昼神幸郎",
    "ユニフォーム",
    "MB",
    "チョキ",
    "アイコニック",
    "/assets/KAMOMEDAI/hirugami_sachiro.png",
  ),
  createPlayer(
    "【Xmas】昼神幸郎",
    "Xmas",
    "MB",
    "グー",
    "アイコニック",
    "/assets/KAMOMEDAI/hirugami_sachiro_xmas.png",
  ),
  createPlayer(
    "【職業体験2】昼神幸郎",
    "職業体験2",
    "MB",
    "パー",
    "アイコニック",
    "/assets/KAMOMEDAI/hirugami_sachiro_jobshadowing2.png",
  ),
  createPlayer(
    "【寝正月】昼神幸郎",
    "寝正月",
    "MB",
    "チョキ",
    "アイコニック",
    "/assets/KAMOMEDAI/hirugami_sachiro_lyinglow.png",
  ),
];
