"use client";

import { usePosition } from "@/hooks/usePosition";

export default function SimulatePosition() {
  const { position, setPlayer, changePlayer, nextRotation } = usePosition();

  const starting = position
    .filter((p, i) => i < 3)
    .reverse()
    .concat(position.filter((p, i) => 3 <= i && i < 6));

  return (
    <div className="block w-full h-full">
      <main className="max-w-5xl m-auto p-8">
        <div className="grid grid-cols-3 grid-rows-2 w-fit m-auto p-2 gap-4">
          {starting.map((p, i) => {
            return (
              <div>
                <p className="text-center text-white text-lg bg-blue-400">
                  {[4, 5, 6, 3, 2, 1][i]}
                </p>
                <div key={i} className="h-32 w-24 bg-gray-300"></div>
                <p className="text-center">{p.name !== "" ? p.name : "なし"}</p>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-6 grid-rows-1 w-fit m-auto p-2 gap-4">
          {position
            .filter((p, i) => 6 <= i && i < 12)
            .reverse()
            .map((p, i) => {
              return (
                <div>
                  <p className="text-center text-white text-lg bg-blue-400">
                    {["A", "B", "C", "D", "E", "F"][i]}
                  </p>
                  <div key={i} className="h-32 w-24 bg-gray-300"></div>
                  <p className="text-center">
                    {p.name !== "" ? p.name : "なし"}
                  </p>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}
