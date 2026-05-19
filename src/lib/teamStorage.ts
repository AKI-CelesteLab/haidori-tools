import {PLAYER_LIST} from "@/data";
import {PlayerData} from "@/types/PlayerData";

const DB_NAME = "haidori-team-maker";
const DB_VERSION = 1;
const STORE_NAME = "teams";
const TEAM_KEY = "current";

type SerializedMember = {name: string; class: string};

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = (e) => resolve((e.target as IDBOpenDBRequest).result);
    request.onerror = (e) => reject((e.target as IDBOpenDBRequest).error);
  });
}

export async function saveTeam(members: PlayerData[]): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const serialized: SerializedMember[] = members.map((m) => ({
      name: m.name,
      class: m.class,
    }));
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const request = store.put(serialized, TEAM_KEY);
    request.onsuccess = () => resolve();
    request.onerror = (e) => reject((e.target as IDBRequest).error);
    tx.oncomplete = () => db.close();
  });
}

export async function loadTeam(): Promise<PlayerData[] | null> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(TEAM_KEY);
    request.onsuccess = (e) => {
      const serialized: SerializedMember[] | undefined = (
        e.target as IDBRequest
      ).result;
      db.close();
      if (!serialized) {
        resolve(null);
        return;
      }
      const members = serialized.map((s) =>
        PLAYER_LIST.find((p) => p.name === s.name && p.class === s.class),
      );
      if (members.some((m) => m === undefined)) {
        resolve(null);
        return;
      }
      resolve(members as PlayerData[]);
    };
    request.onerror = (e) => reject((e.target as IDBRequest).error);
  });
}
