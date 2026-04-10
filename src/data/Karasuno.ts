import { PlayerData } from "@/types/PlayerData";
import { createKarasunoPlayer } from "@/utils/createKarasunoPlayer";

import hinata_syouyou_uniform_img from "@/assets/karasuno/hinata_syouyou_uniform.png";
import kageyama_tobio_uniform_img from "@/assets/karasuno/kageyama_tobio_uniform.png";
import tukishima_kei_uniform_img from "@/assets/karasuno/tukishima_kei_uniform.png";
import yamaguchi_tadashi_uniform_img from "@/assets/karasuno/yamaguchi_tadashi_uniform.png";
import nishinoya_yuu_uniform_img from "@/assets/karasuno/nishinoya_yuu_uniform.png";
import tanaka_ryuunosuke_uniform_img from "@/assets/karasuno/tanaka_ryuunosuke_uniform.png";
import sawamura_daichi_uniform_img from "@/assets/karasuno/sawamura_daichi_uniform.png";
import sugawara_koushi_uniform_img from "@/assets/karasuno/sugawara_koushi_uniform.png";
import azumane_asahi_uniform_img from "@/assets/karasuno/azumane_asahi_uniform.png";
import ennoshita_chikara_uniform_img from "@/assets/karasuno/ennoshita_chikara_uniform.png";
import kinoshita_hisashi_uniform_img from "@/assets/karasuno/kinoshita_hisashi_uniform.png";
import narita_kazuhito_uniform_img from "@/assets/karasuno/narita_kazuhito_uniform.png";

const KarasunoPlayers: PlayerData[] = [
  createKarasunoPlayer({
    name: "日向翔陽",
    category: "ユニフォーム",
    position: "MB",
    type: "チョキ",
    class: "アイコニック",
    image: hinata_syouyou_uniform_img,
  }),
  createKarasunoPlayer({
    name: "影山飛雄",
    category: "ユニフォーム",
    position: "S",
    type: "チョキ",
    class: "アイコニック",
    image: kageyama_tobio_uniform_img,
  }),
  createKarasunoPlayer({
    name: "月島蛍",
    category: "ユニフォーム",
    position: "MB",
    type: "チョキ",
    class: "アイコニック",
    image: tukishima_kei_uniform_img,
  }),
  createKarasunoPlayer({
    name: "山口忠",
    category: "ユニフォーム",
    position: "MB",
    type: "パー",
    class: "アイコニック",
    image: yamaguchi_tadashi_uniform_img,
  }),
  createKarasunoPlayer({
    name: "西谷夕",
    category: "ユニフォーム",
    position: "Li",
    type: "チョキ",
    class: "アイコニック",
    image: nishinoya_yuu_uniform_img,
  }),
  createKarasunoPlayer({
    name: "田中龍之介",
    category: "ユニフォーム",
    position: "WS",
    type: "パー",
    class: "アイコニック",
    image: tanaka_ryuunosuke_uniform_img,
  }),
  createKarasunoPlayer({
    name: "澤村大地",
    category: "ユニフォーム",
    position: "WS",
    type: "チョキ",
    class: "アイコニック",
    image: sawamura_daichi_uniform_img,
  }),
  createKarasunoPlayer({
    name: "菅原孝支",
    category: "ユニフォーム",
    position: "S",
    type: "パー",
    class: "アイコニック",
    image: sugawara_koushi_uniform_img,
  }),
  createKarasunoPlayer({
    name: "東峰旭",
    category: "ユニフォーム",
    position: "WS",
    type: "チョキ",
    class: "アイコニック",
    image: azumane_asahi_uniform_img,
  }),
  createKarasunoPlayer({
    name: "縁下力",
    category: "ユニフォーム",
    position: "WS",
    type: "パー",
    class: "アイコニック",
    image: ennoshita_chikara_uniform_img,
  }),
  createKarasunoPlayer({
    name: "木下久志",
    category: "ユニフォーム",
    position: "WS",
    type: "パー",
    class: "アイコニック",
    image: kinoshita_hisashi_uniform_img,
  }),
  createKarasunoPlayer({
    name: "成田一仁",
    category: "ユニフォーム",
    position: "MB",
    type: "パー",
    class: "アイコニック",
    image: narita_kazuhito_uniform_img,
  }),
];
