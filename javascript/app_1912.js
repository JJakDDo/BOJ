const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const T = input.shift();
let m = input[0].split(" ").map(e => +e);

function solution(n, m){
    dp = Array(n+1).fill(-1001);
    for(let i = 1; i < n+1;i++){
        dp[i] = Math.max(dp[i-1] + m[i-1], m[i-1]);
    }
    console.log(Math.max(...dp));
}
solution(+T, m);