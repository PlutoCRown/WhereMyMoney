import { useGlobalComponents } from "@/Context/DOM";
import { Getter, Setter } from "@/types";
import { useLocalStorage } from "./useLocalStorage";

let db: IDBDatabase | null | any = null;
const { Toast } = useGlobalComponents();
export function useIndexDB<T>(key: string) {
  if (db == null) {
    if (!("indexDB" in window)) {
      Toast("error", "你的浏览器不支持IndexDB | 建议使用云同步以保证数据安全");
      // 降级使用localStorage完成
      return useLocalStorage(key);
    }
    db = window.indexedDB.open("DateBseName", 1 /* version */);
    db.onupgradeneeded = () => {
      // db版本更新回调
    };

    // 创建表
    if (!db.objectStoreNames.contains("ChipsTable")) {
      let objectStore = db.createObjectStore("ChipsTable", { keyPath: "Id" });
      objectStore.createIndex("Id", "Id", { unique: true });
      objectStore.createIndex("Name", "Name");
      objectStore.createIndex("Affiliation", "Affiliation");
    }
  }
  // TODO: 未更新的代码
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

type AnyFn = (...args: any) => any;

function insertBase(dbase: IDBDatabase, data: any, cb: AnyFn) {
  // let transaction=dbase.transaction(['upload','readwrite'])   //事务
  // let objectStore=transaction.objectStore('upload')   //  对象仓库
  let result = dbase
    .transaction(["upload"], "readwrite")
    .objectStore("upload")
    .add(data);
  InjectCallback(result, "写入", cb, cb);
  result.onsuccess = function (event) {
    cb(event);
    console.log("数据写入成功");
  };
}

function deleteBase(dbase: IDBDatabase, key: string, cb: AnyFn) {
  // key 主键键值
  let transaction = dbase.transaction(["upload"], "readwrite");
  let table = transaction.objectStore("upload");
  let result = table.delete(key);
  InjectCallback(result, "删除", cb, cb);
}

function updateBase(dbase: IDBDatabase, key: string, data: any, cb: AnyFn) {
  let transaction = dbase.transaction(["upload"], "readwrite");
  let table = transaction.objectStore("upload");
  let result = table.get(key);
  InjectCallback(result, "更新", cb, cb);
  result.onsuccess = function () {
    console.log("数据更新成功");
    table.put(data);
  };
}

function findAllBase(dbase: IDBDatabase, cb: AnyFn) {
  let result = dbase.transaction(["upload"]).objectStore("upload").getAll();
  InjectCallback(result, "查询", cb, cb);
}

function InjectCallback(
  to: object,
  key: string,
  successCb?: AnyFn,
  errorCb?: AnyFn
) {
  Object.assign(to, {
    onsuccess: function (event: any) {
      console.log(`${key}数据成功`);
      successCb && successCb(event);
    },
    onerror: function (event: any) {
      console.log(`${key}数据失败`);
      errorCb && errorCb(event);
    },
  });
}
