import { useStore, create } from "zustand";
import { shallow } from "zustand/shallow";
import { subscribeWithSelector } from "zustand/middleware";

// 创建存储
const useBearStore = create((set, get: any) => ({
  bears: 0,
  // 使用set更新数据，返回的对象将被合并到存储
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  // 使用get更简单
  descresePopulation: () => set({ bears: get().bears - 1 }),
  // 指定第二个参数为true，返回的对象将取代存储
  removeAll: () => set({}, true),
}));

// 在组件中使用
function BearCounter() {
  // 使用选择器而不是解构赋值，这样除此数据更新之外不会通知此组件
  const bears = useBearStore((state: any) => state.bears, shallow);
  return <h1>{bears} around here ...</h1>;
}

const state = useBearStore();

// 切片将在数据更新时更新
const nuts = useBearStore((state: any) => state.nuts);
// 你可以传入比较函数来使用浅比较
const [honey, nut] = useBearStore(
  (state: any) => [state.honey, state.nuts],
  shallow
);
// 比较函数可以是自定义的
const treats = useBearStore(
  (state: any) => state.treats,
  (oldTreats, newTreats) => oldTreats - newTreats > 0
);

const useDogStore = create(() => ({ paw: true, snout: true, fur: true }));

// 使失去响应性
const paw = useDogStore.getState().paw;
// 订阅全部变化
const unsub1 = useDogStore.subscribe(console.log);
// 更新
useDogStore.setState({ paw: false });
// 取消订阅
unsub1();

const useDogStore_ = create(
  subscribeWithSelector(() => ({ paw: true, snout: true, fur: true }))
);
// 订阅部分更新
const unsub2 = useDogStore_.subscribe((state) => state.paw, console.log);
// 获取当前值和此前值
const unsub3 = useDogStore_.subscribe(
  (state) => state.paw,
  (paw, previousPaw) => console.log(paw, previousPaw)
);
// 可选的比较函数
const unsub4 = useDogStore_.subscribe(
  (state) => [state.paw, state.fur],
  console.log,
  { equalityFn: shallow }
);
// 立即调用一次
const unsub5 = useDogStore_.subscribe((state) => state.paw, console.log, {
  fireImmediately: true,
});

import { useRef, useEffect } from "react";
const scratchRef = useRef(useDogStore.getState().paw);
// 手动响应？
useEffect(
  () => useDogStore.subscribe((state) => (scratchRef.current = state.paw)),
  []
);

// 中间件
// @ts-ignore
const log = (config) => (set, get, api) =>
  config(
    (...args: any[]) => {
      console.log("设置前", args);
      set(...args);
      console.log("设置后", get());
    },
    get,
    api
  );

const useBeeStore = create(
  log((set: any) => ({
    bees: false,
    setBees: (input: any) => set({ bees: input }),
  }))
);

// Immer
// import { immer } from "zustand/middleware/immer";
// const useBeeStoreImmer = create(
//   immer((set) => ({
//     bees: 0,
//     addBees: (by: number) =>
//       set((state: any) => {
//         state.bees += by;
//       }),
//   }))
// );

// 持久化
import { persist, createJSONStorage } from "zustand/middleware";

const useFishStore = create(
  persist(
    (set: any, get: any) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: "food-storage", // 存储名
      storage: createJSONStorage(() => sessionStorage), // 存储方案
    }
  )
);
