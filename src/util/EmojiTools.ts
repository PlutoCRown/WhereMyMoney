const isEmoji = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
export const startWithEmoji = (str: string) => isEmoji.test(str[0] + str[1]);
export const getEmoji = (str: string) =>
  startWithEmoji(str)
    ? { emoji: str.substring(0, 2), text: str.substring(2) }
    : { emoji: undefined, text: str };
