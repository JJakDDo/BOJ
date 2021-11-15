const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = +input.shift();
const t = input.map(e=>+e);

function solution(n, wine){
    const dp = Array(n + 1);
    for(let i = 0; i <= n; i++){
        dp[i] = Array(3).fill(0);
    }
    dp[1][0] = 0;
    dp[1][1] = wine[0];
    dp[1][2] = wine[0];
    for(let j = 2; j <= n; j++){
        dp[j][0] = Math.max(dp[j-1][0], dp[j-1][1], dp[j-1][2]);
        dp[j][1] = dp[j-1][0] + wine[j-1];
        dp[j][2] = Math.max(dp[j-1][0] + wine[j-1],  dp[j-1][1] + wine[j-1]);
    }
    console.log(Math.max(...dp[n]));
}
solution(N, t);