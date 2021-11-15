const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = +input[0].split(" ")[0];
const K = +input[0].split(" ")[1];

function solution(n, k){
    const dp = Array(k + 1);
    for(let i = 0; i <= k; i++){
        dp[i] = Array(n + 1).fill(0);
    }
    for(let i = 0; i <= n; i++){
        dp[1][i] = 1;
    }
    for(let j = 2; j <= K; j++){
        for(let i = 0; i <= n; i++){
            for(let m = 0; m <= i; m++){
                dp[j][i] += dp[j-1][m] % 1000000000;
            }
        }
    }
    console.log(dp[k][n] % 1000000000);
}
solution(N, K);