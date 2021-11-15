const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = +input.shift();
const s = input.map(elem =>  {
    return elem.split(" ").map(e => +e);
});

function solution(n, testCase){
    const dp = Array(n+1);
    for(let i = 0; i <= n; i++){
        dp[i] = Array(3);
    }
    for(let i = 0; i < 3; i++){
        dp[1][i] = testCase[0][i];
    }
    for(let i = 2; i <= n; i++){
        dp[i][0] = Math.min(testCase[i-1][0] + dp[i-1][1], testCase[i-1][0] + dp[i-1][2]);
        dp[i][1] = Math.min(testCase[i-1][1] + dp[i-1][0], testCase[i-1][1] + dp[i-1][2]);
        dp[i][2] = Math.min(testCase[i-1][2] + dp[i-1][0], testCase[i-1][2] + dp[i-1][1]);
    }
    console.log(Math.min(...dp[n]));
}
solution(N, s);