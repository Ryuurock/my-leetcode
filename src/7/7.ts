// 整数反转

/**
 * 使用内置函数偷懒版
 */
export const mine = (num: number) => {
  const numStr = num.toString().split("");
  return parseInt(
    numStr[0] === "-"
      ? `-${numStr.slice(1).reverse().join("")}`
      : numStr.reverse().join(""),
    10
  );
};

/**
 * 乖乖翻转版
 */
export const mine2 = (num: number) => {
  const numStr = num.toString().split("");
  const newNumStr: string[] = [];
  while (numStr.length) {
    const char = numStr.pop()!;
    if (char === "-") {
      newNumStr.unshift(char);
    } else {
      newNumStr.push(char);
    }
  }

  return parseInt(newNumStr.join(""));
};

/**
 * 节约空间版
 */
export const mine3 = (num: number) => {
  const negative = num < 0;
  const numStr = Math.abs(num).toString().split("");
  for (let index = 0; index < numStr.length; index++) {
    // numStr.push();

    numStr.splice(index, 0, numStr.pop()!);
  }

  return parseInt(`${negative ? "-" : ""}${numStr.join("")}`);
};

/**
 * 正常实现版
 */

export const mine4 = (num: number) => {
  let startNum = num;

  let reverseNum = 0;

  while (startNum !== 0) {
    const digit = startNum % 10;
    reverseNum = reverseNum * 10 + digit;
    startNum = parseInt((startNum / 10).toString(), 10);
  }

  return reverseNum;
};
