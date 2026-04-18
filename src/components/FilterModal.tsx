import {FiltersType} from "@/types/Filters";
import {
  categoryList,
  classList,
  positionList,
  schoolList,
  typeList,
} from "@/types/PlayerData";
import FilterSection from "./FilterSection";

type Props = {
  filters: FiltersType;
  onFilterToggle: (category: keyof FiltersType, value: string) => void;
  setIsModalOpen: (isOpen: boolean) => void;
};

export default function FilterModal({
  filters,
  onFilterToggle,
  setIsModalOpen,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50 p-4">
      <div className="bg-white w-full max-w-md max-h-[80vh] rounded-xl shadow-xl overflow-hidden flex flex-col">
        <div className="p-4 border-b flex justify-between items-center bg-gray-50">
          <h4 className="font-bold">絞り込み条件</h4>
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-gray-500"
          >
            ✕
          </button>
        </div>

        <div className="p-4 overflow-y-auto space-y-6">
          {/* カテゴリ(イベント)フィルタ */}
          <FilterSection
            label="カテゴリ"
            items={categoryList}
            selectedItems={filters.categories}
            onToggle={(val: string) => onFilterToggle("categories", val)}
          />
          {/* 学校フィルタ */}
          <FilterSection
            label="学校"
            items={schoolList}
            selectedItems={filters.schools}
            onToggle={(val: string) => onFilterToggle("schools", val)}
          />
          {/* ポジションフィルタ */}
          <FilterSection
            label="ポジション"
            items={positionList}
            selectedItems={filters.positions}
            onToggle={(val: string) => onFilterToggle("positions", val)}
          />
          {/* タイプ(属性)フィルタ */}
          <FilterSection
            label="属性"
            items={typeList}
            selectedItems={filters.types}
            onToggle={(val: string) => onFilterToggle("types", val)}
          />
          {/* レアリティフィルタ */}
          <FilterSection
            label="クラス"
            items={classList}
            selectedItems={filters.classes}
            onToggle={(val: string) => onFilterToggle("classes", val)}
          />
        </div>

        <div className="p-4 border-t bg-gray-50">
          <button
            onClick={() => setIsModalOpen(false)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold"
          >
            決定
          </button>
        </div>
      </div>
    </div>
  );
}
