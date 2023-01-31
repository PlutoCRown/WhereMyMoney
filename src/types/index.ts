export type ChipType = {
  id: string;
  name: string;
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
