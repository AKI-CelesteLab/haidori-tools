import {PLAYER_LIST} from "@/data";
import {PlayerData} from "@/types/PlayerData";

const PARAM_KEY = "t";

export function encodeTeam(members: PlayerData[]): string {
  const indices = members.map((m) =>
    PLAYER_LIST.findIndex((p) => p.name === m.name && p.class === m.class),
  );
  if (indices.some((i) => i === -1)) return "";
  return indices.join(",");
}

export function decodeTeam(param: string): PlayerData[] | null {
  try {
    const indices = param.split(",").map(Number);
    if (indices.length !== 12) return null;
    const members = indices.map((i) => PLAYER_LIST[i]);
    if (members.some((m) => m === undefined)) return null;
    return members;
  } catch {
    return null;
  }
}

export function getSharedTeamFromURL(): PlayerData[] | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  const t = params.get(PARAM_KEY);
  if (!t) return null;
  return decodeTeam(t);
}

export function buildShareURL(members: PlayerData[]): string {
  const encoded = encodeTeam(members);
  if (!encoded) return "";
  const url = new URL(window.location.href);
  url.searchParams.set(PARAM_KEY, encoded);
  return url.toString();
}

export async function copyShareURL(members: PlayerData[]): Promise<boolean> {
  const url = buildShareURL(members);
  if (!url) return false;
  window.history.replaceState(null, "", url);
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch {
    return false;
  }
}
