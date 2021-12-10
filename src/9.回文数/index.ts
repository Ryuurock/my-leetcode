/**
 * 转字符串版
 */
export const huiwenshu = (num: number) => {
  if (num < 0) {
    return false;
  }

  const numStr = num.toString();
  if (numStr.length % 2) {
    return (
      numStr.substring(0, Math.floor(numStr.length / 2)) ===
      numStr.substring(Math.ceil(numStr.length / 2), numStr.length)
    );
  }

  return (
    numStr.substring(0, numStr.length / 2) ===
    numStr.substring(numStr.length / 2, numStr.length)
  );
};
