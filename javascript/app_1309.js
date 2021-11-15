const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = +input.shift();

function solution(n){
    dp = Array(n + 1);
    for(let i = 0; i <= n; i++){
        dp[i] = Array(3);
    }
    dp[1][0] = 1;
    dp[1][1] = 1;
    dp[1][2] = 1;
    for(let i = 2; i <= n; i++){
        dp[i][0] = (dp[i-1][0] + dp[i-1][1] + dp[i-1][2]) % 9901;
        dp[i][1] = (dp[i-1][0] + dp[i-1][2]) % 9901;
        dp[i][2] = (dp[i-1][0] + dp[i-1][1]) % 9901;
    }
    console.log(dp[n].reduce((acc, elem) => acc+elem) % 9901);
}
solution(N);