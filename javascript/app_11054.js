const { Console } = require('console');
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const T = input.shift();
let m = input[0].split(" ").map(e => +e);

function solution(n, m){
    let dp = Array(n+1).fill(1);
    for(let i = 2; i <= n;i++){
        for(let j = 1; j < i; j++){
            if(m[i-1] > m[j-1]){
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
    }
    let dp2 = Array(n+1).fill(1);
    for(let i = n-1; i > 0; i--){
        for(let j = i+1; j <= n; j++){
            if(m[i-1] > m[j-1]){
                dp2[i] = Math.max(dp2[j] + 1, dp2[i]);
            }
        }
    }
    console.log(Math.max(...dp.map((e,i) => e+dp2[i])) - 1);
}
solution(+T, m);