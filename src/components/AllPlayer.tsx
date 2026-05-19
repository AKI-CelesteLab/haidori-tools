"use client";

import {PlayerData} from "@/types/PlayerData";
import PlayerCard from "./PlayerCard";
import {useState, useRef, useMemo, useEffect} from "react";
import {FiltersType} from "@/types/Filters";
import FilterModal from "./FilterModal";
import {useVirtualizer} from "@tanstack/react-virtual";

type Props = {
  players: PlayerData[];
  onPlayerSelect: (player: PlayerData) => void;
  selectedName: string | null;
  filters: FiltersType;
  onFilterToggle: (category: keyof FiltersType, value: string) => void;
};

export default function AllPlayer({
  players,
  onPlayerSelect,
  selectedName,
  filters,
  onFilterToggle,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cols, setCols] = useState(4);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeCount = Object.values(filters).flat().length;

  // コンテナ幅に応じてカラム数を決定
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setCols(entry.contentRect.width >= 640 ? 6 : 4);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // players を cols 単位の行配列に変換
  const rows = useMemo(() => {
    const result: PlayerData[][] = [];
    for (let i = 0; i < players.length; i += cols) {
      result.push(players.slice(i, i + cols));
    }
    return result;
  }, [players, cols]);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => 160,
    overscan: 3,
    measureElement:
      typeof window !== "undefined" && !navigator.userAgent.includes("Firefox")
        ? (el) => el.getBoundingClientRect().height
        : undefined,
  });

  return (
    <div className="bg-gray-100 w-full p-4 rounded-lg flex flex-col h-screen max-h-dvh">
      <div className="flex justify-between items-center mb-3 flex-none">
        <h3 className="text-sm font-bold">未配置の選手（{players.length}）</h3>
        <button
          onClick={() => setIsModalOpen(true)}
          className={`text-base font-bold text-center px-4 py-1 rounded-full border ${
            activeCount > 0
              ? "bg-orange-500 text-white border-orange-600"
              : "bg-white border-gray-300"
          }`}
        >
          フィルタ {activeCount > 0 && `(${activeCount})`}
        </button>
      </div>

      {isModalOpen && (
        <FilterModal
          filters={filters}
          onFilterToggle={onFilterToggle}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      {/* 仮想スクロールコンテナ */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto min-h-0 pr-1 custom-scrollbar"
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              ref={rowVirtualizer.measureElement}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY(${virtualRow.start}px)`,
                display: "grid",
                gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                gap: "8px",
                paddingBottom: "8px",
                justifyItems: "center",
              }}
            >
              {rows[virtualRow.index].map((player) => {
                const isSelected = selectedName === player.name;
                return (
                  <div
                    key={player.name + player.class}
                    className={`cursor-pointer w-full max-w-32 transition-transform active:scale-95 ${
                      isSelected ? "scale-105" : "opacity-80"
                    }`}
                  >
                    <PlayerCard
                      player={player}
                      handleClick={() => onPlayerSelect(player)}
                      isSelected={isSelected}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
