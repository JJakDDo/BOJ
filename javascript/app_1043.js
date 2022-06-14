const fs = require("fs");
///dev/stdin
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .replace(/\r\n/g, "\n")
  .split("\n");
//const N = +input.shift();
const s = input.map((elem) => {
  return elem.split(" ").map((e) => +e);
});

const N = s[0][0];
const M = s[0][1];

const truthArr = Array(N + 1).fill(false);

const edges = Array(N + 1).fill([]);
// 백준은 .split("\n")하게 되면 마지막 빈 줄까지 읽어오기때문에
// s.length 를 사용하게 되면 틀렸다고 뜬다.
// 그래서 정확히 testCase 개수만큼 반복문을 돌려야 한다.
for (let i = 2; i < M + 2; i++) {
  const numberOfPeople = s[i].shift();
  if (numberOfPeople >= 2) {
    for (let j = 0; j < numberOfPeople; j++) {
      edges[s[i][j]] = [
        ...edges[s[i][j]],
        ...s[i].filter((elem, index) => index != j),
      ];
    }
  }
}
const newEdges = edges.map((edge) => {
  const set = new Set(edge);
  return [...set];
});
let stack = [];
for (let i = 1; i <= s[1][0]; i++) {
  stack.push(s[1][i]);
}

while (stack.length) {
  let elem = stack.pop();
  truthArr[elem] = true;
  if (edges[elem].length) {
    stack.push(...edges[elem].filter((e) => !truthArr[e]));
  }
}

let numberOfParty = 0;
for (let i = 2; i < M + 2; i++) {
  if (s[i].every((elem) => !truthArr[elem])) {
    numberOfParty++;
  }
}
console.log(numberOfParty);
