interface FileTree {
  fileName: string;
  dependencies?: FileTree[];
}
/**
 *  写一个脚本根据文件依赖关系自动计算得到回归范围。
    已知通过webpack获取到文件依赖关系文件，通过
    简单加工处理，得到json数据。
    输入文件，返回回归范围。
 */
const dependenceTreeFind = (
  fileTree: FileTree[],
  targetFileName: string,
  path?: string[]
) => {
  const files: string[][] = [];
  for (let i = 0; i < fileTree.length; i++) {
    const startPath: string[] = path || [];
    const file = fileTree[i];
    if (file.fileName === targetFileName) {
      files.push([...startPath, file.fileName]);
    }

    if (file.dependencies) {
      startPath.push(file.fileName);
      files.push(
        ...dependenceTreeFind(file.dependencies, targetFileName, startPath)
      );
    }
  }

  return files;
};

test("dependenceTreeFind", () => {
  expect(
    dependenceTreeFind(
      [
        {
          fileName: "a.js",
          dependencies: [
            {
              fileName: "b.js",
            },
            {
              fileName: "c.js",
            },
          ],
        },
        {
          fileName: "c.js",
        },
        {
          fileName: "d.js",
          dependencies: [
            {
              fileName: "b.js",
            },
            {
              fileName: "e.js",
              dependencies: [
                {
                  fileName: "f.js",
                  dependencies: [
                    {
                      fileName: "c.js",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      "c.js"
    )
  ).toEqual([["a.js", "c.js"], ["c.js"], ["d.js", "e.js", "f.js", "c.js"]]);
});
