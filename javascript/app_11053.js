const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const T = input.shift();
let m = input[0].split(" ").map(e => +e);

function solution(n, m){
    const dp = Array(n+1).fill(1);
    for(let i = 2; i <= n; i++){
        for(let j = 1; j < i; j++){
            if(m[i-1] > m[j-1]){
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    console.log(Math.max(...dp));
}
solution(+T, m);