const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = +input.shift();

function solution(n){
    const dp = Array(n+1);
    for(let i = 0; i <= n; i++){
        dp[i] = Array(10).fill(0);
    }
    for(let i = 0; i < 10; i++){
        dp[1][i] = 1;
    }

    for(let i = 2; i <= n; i++){
        for(let j = 0; j < 10; j++){
            for(let k = j; k >= 0; k--){
                dp[i][j] += dp[i-1][k] % 10007;
            }
        }
    }
    console.log(dp[n].reduce((acc, elem) => acc+elem) % 10007);
}
solution(N);