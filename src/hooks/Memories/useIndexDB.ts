import { useGlobalComponents } from "@/Context/DOM";
import { Getter, Setter } from "@/types";

let db: any = null;
const { Toast } = useGlobalComponents();
export function useIndexDB<T>(key: string) {
  if (db == null) {
    if (!("indexDB" in window)) {
      Toast("error", "你的浏览器不支持IndexDB | 请使用App版本");
    }
    db = window.indexedDB.open("DateBseName", 1 /* version */);
    db.onupgradeneeded = () => {
      // db版本更新回调
    };
    db.createObjectStore("TableName", {
      keyPath: "id",
    });
  }
  return {
    get: ((defaultValue?: T) => {
      const storage = localStorage.getItem(key);
      if (storage) return JSON.parse(storage);
      else return defaultValue;
    }) as Getter<T>,

    set: ((obj: Object) => {
      localStorage.setItem(key, JSON.stringify(obj));
    }) as Setter<T>,
  };
}
