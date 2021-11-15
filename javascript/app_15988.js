const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = +input.shift();
const s = input.map(elem => +elem);

function solution(n, testCase){
    const max = Math.max(...testCase);
    const dp = Array(max+1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    for(let i = 4; i <= max; i++){
        dp[i] = (dp[i-1] + dp[i-2] + dp[i-3]) % 1000000009;
    }
    for(let i = 0; i < n; i++){
        console.log(dp[testCase[i]]);
    }
}
solution(N, s);