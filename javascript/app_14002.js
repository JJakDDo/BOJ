const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const T = input.shift();
let m = input[0].split(" ").map(e => +e);

function solution(n, m){
    let dp = Array(n+1);
    dp[0] = [0];
    for(let i = 1; i < n+1; i++){
        dp[i] = [];
        dp[i].push(m[i-1]);
    }
    for(let i = 2; i <= n; i++){
        const temp = dp[i];
        for(let j = 1; j < i; j++){
            if(m[i-1] > m[j-1]){
                if([...dp[j], ...temp].length > dp[i].length){
                    dp[i] = [...dp[j], ...temp];
                }
            }
        }
    }
    const leng = dp.map((elem) => elem.length);
    console.log(Math.max(...leng));
    if(Math.max(...leng) == 1){
        console.log(m[0]);
    } else {
        console.log(dp[leng.indexOf(Math.max(...leng))].join(" "));
    }
}
solution(+T, m);