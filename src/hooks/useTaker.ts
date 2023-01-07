const data = {
  Taker: [
    {
      id: "1",
      name: "我",
    },
    {
      id: "2",
      name: "你",
    },
  ],
};

export const useTaker = () => {
  return {
    data: data.Taker,
    Add: {},
    rename: {},
    del: {},
  };
};
