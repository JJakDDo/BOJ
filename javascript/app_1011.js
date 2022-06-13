const fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .replace(/\r\n/g, "\n")
  .split("\n");
const N = +input.shift();
const s = input.map((elem) => {
  return elem.split(" ").map((e) => +e);
});

function solution(n, testCase) {
  for (let i = 0; i < n; i++) {
    let distanceToGo = testCase[i][1] - testCase[i][0];
    let longestWarpDistance = Math.floor(Math.sqrt(distanceToGo));
    let numberOfMinWarp = longestWarpDistance * 2 - 1;
    let additionalWarp = Math.ceil(
      (distanceToGo - Math.pow(longestWarpDistance, 2)) / longestWarpDistance
    );
    console.log(numberOfMinWarp + additionalWarp);
  }
}
solution(N, s);
//console.log(N, s);
