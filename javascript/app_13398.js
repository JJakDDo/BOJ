const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const T = input.shift();
let m = input[0].split(" ").map(e => +e);

function solution(n, m){
    dp = Array(n+1);
    for(let i = 0; i <= n; i++){
        dp[i] = Array(2).fill(-1001);
    }
    dp[1][0] = m[0]; //앞에 수열에서 지워진게 없을 때 가장 큰 수열을 저장하는 배열
    dp[1][1] = m[0]; // i번째 수가 지워졌을 때 가장 큰 수열을 저장하는 배열
    const min = Math.min(...m);
    let isRemoved = false;
    let answer = m[0];
    if(n == 1){
        console.log(m[0]);
    } else {
        for(let i = 1; i < n+1;i++){
            dp[i][0] = Math.max(dp[i-1][0] + m[i-1], m[i-1]);
            dp[i][1] = Math.max(dp[i-1][0], dp[i-1][1] + m[i-1]);  
            answer = Math.max(answer, Math.max(dp[i][0], dp[i][1]));          
        }
        console.log(answer);
    }
}
solution(+T, m);