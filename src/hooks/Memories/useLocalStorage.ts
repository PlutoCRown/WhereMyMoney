import { Getter, Setter } from "@/types";

export function useLocalStorage<T>(key: string) {
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
