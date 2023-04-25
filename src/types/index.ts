export type ChipType = {
  id: string;
  name: string;
  color?: Color;
};

export type BillTData = {
  id: string;
  date: Date;
  Taker: string;
  Reason: string;
  Amount: number;
  Remark: string;
};

export type Getter<T> = (defaultValue?: T) => T;
export type Setter<T> = (value: T) => void;
export type StorageController<T> = (key: string) => {
  get: Getter<T>;
  set: Setter<T>;
};

// type HEX = | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f";
// type RGB = `rgb(${number}, ${number}, ${number})`;
// type HSL = `hsl(${number}, ${number}, ${number})`;
// type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
// type HEX_6 = `#${HEX}${HEX}${HEX}${HEX}${HEX}${HEX}`;
// type HEX_3 = `#${HEX}${HEX}${HEX}`;
export type Color = string; //RGB | RGBA | HEX_6 | HEX_3 | HSL;
export type TagColor =
  | "default"
  | "error"
  | "info"
  | "primary"
  | "secondary"
  | "success"
  | "warning";
