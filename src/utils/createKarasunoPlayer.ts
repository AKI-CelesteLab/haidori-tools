import { PlayerData } from "@/types/PlayerData";

export function createKarasunoPlayer(
  data: Omit<PlayerData, "school">,
): PlayerData {
  return {
    ...data,
    school: "烏野高校",
  };
}
