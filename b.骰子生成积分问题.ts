/**
 * 
 * 技术团队技术分享，确定分享者规则。
1. 采用积分制，所有人从 0 开始积分
2. 每轮技术分享，扔骰子决定每人积分,分数即是骰子点数
3. 如果超过两个人点数相同，则再扔骰子，分数累加，直到选出两名分享者为止
4. 本轮分享者积分清零并自动跳过下轮扔骰子

*注意：如果本轮次积分最高的有一名，次高的有两名，则第一名直接成为分享者，剩下的人继续选

*扩展：如果选中人数不止两人，作为参数，如何设计

提示：所有人积分和轮次需要作为全局变量进行记录
 */

let currentRound = 1;

const peopleMap: Record<string, number> = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
};

const generateFraction = () => {
  return Math.floor(Math.random() * 6 + 1);
};

const findCount = (fractions: [string, number][], startIndex: number) => {
  const sharers: [string, number][] = [];
  for (let index = startIndex; index < fractions.length; index++) {
    const fractionItem = fractions[index];
    const [, fraction] = fractionItem;
    if (index === startIndex) {
      sharers.push(fractionItem);
    } else {
      const prevItem = fractions[index - 1];

      if (fraction === prevItem[1]) {
        sharers.push(fractionItem);
      } else {
        break;
      }
    }
  }

  return sharers;
};

const generateFractionForPeople = (
  people: string[],
  count: number
): string[] => {
  const fraction = people.map((name): [string, number] => [
    name,
    peopleMap[name] + generateFraction(),
  ]);

  fraction.sort((a, b) => b[1] - a[1]);

  // 从0开始寻找相同的分数
  let sharers = findCount(fraction, 0);
  // 超过分享人数则要重新掷
  if (sharers.length > count) {
    // 重新掷
    return generateFractionForPeople(people, count);
  } else {
    // 从1开始寻找相同分数
    const start1Sharers = findCount(fraction, 1);

    if (start1Sharers.length > 1) {
      // 有两个以上的人则让第一名去
      sharers = fraction.slice(0, 1);
    } else {
      // 否则就让前 count 人去
      sharers = fraction.slice(0, count);
    }
  }

  fraction.forEach(([name, score]) => {
    peopleMap[name] = score;
  });

  const sharersName = sharers.map(([name]) => name);

  sharersName.forEach((name) => {
    peopleMap[name] = 0;
  });

  return sharersName;
};

if (process.env.NODE_ENV !== "test") {
  setInterval(() => {
    const sharers = generateFractionForPeople(Object.keys(peopleMap), 2);
    console.log(
      `当前轮次 ${currentRound++}，分享者：${sharers.join(",")}，当前分数情况：`
    );
    console.table(peopleMap);
  }, 1e3);
} else {
  // 这里是测试用例
  test("findCount", () => {
    const data: [string, number][] = [
      ["a", 6],
      ["b", 5],
      ["c", 5],
      ["d", 4],
    ];
    expect(findCount(data, 0).length).toBe(1);
    expect(
      findCount(
        [
          ["a", 1],
          ["a", 1],
          ["a", 1],
          ["a", 1],
        ],
        0
      ).length
    ).toBe(4);
    expect(findCount(data, 1).length).toBe(2);
    expect(
      findCount(
        [
          ["a", 2],
          ["a", 1],
          ["a", 1],
          ["a", 1],
        ],
        1
      ).length
    ).toBe(3);
  });
}

export {};
