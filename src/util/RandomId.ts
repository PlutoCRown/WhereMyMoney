export const RandomId = () => {
  if (crypto && crypto.randomUUID) {
    return crypto.randomUUID();
  } else {
    return Math.random().toString(36).substr(2, 9);
  }
};
