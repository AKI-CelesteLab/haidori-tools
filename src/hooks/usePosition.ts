import { PlayerData } from "@/types/PlayerData";
import { useState } from "react";

export function usePosition() {
  /*
  potition[0] = スタメン6
  potition[1] = スタメン5
  potition[2] = スタメン4
  potition[3] = スタメン3
  potition[4] = スタメン2
  potition[5] = スタメン1
  potition[6] = 交代メンバーA
  potition[7] = 交代メンバーB
  potition[8] = 交代メンバーC
  potition[9] = 交代メンバーD
  potition[10] = 交代メンバーE
  potition[11] = 交代メンバーF
  */
  const initPlayer: PlayerData = {
    name: null,
    category: null,
    school: null,
    position: null,
    type: null,
    class: null,
    image: null,
  };
  const [position, setPosition] = useState<PlayerData[]>(
    new Array(12).fill(initPlayer),
  );

  function setPlayer(index: number, player: PlayerData) {
    if (index < position.length) return null;

    setPosition((prev) => {
      const result = [...prev];
      result[index] = player;
      return result;
    });
  }

  function changePlayer(court: number, bench: number) {
    if (
      court < position.length / 2 &&
      position.length / 2 <= bench &&
      bench < position.length
    )
      return null;

    setPosition((prev) => {
      const result = [...prev];
      [result[court], result[bench]] = [result[bench], result[court]];
      return result;
    });
  }

  function nextRotation(): void {
    setPosition((prev) => {
      const result = [...prev];
      const firstElement = result.shift(); // 先頭を取り出す
      if (firstElement !== undefined) {
        result.push(firstElement); // 最後尾に追加
      }
      return result;
    });
  }

  // Stateと関数を返す
  return { position, setPlayer, changePlayer, nextRotation };
}
