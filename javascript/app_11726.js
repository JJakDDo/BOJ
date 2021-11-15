const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let m = +input[0];


function solution(m){
    let table = Array(m+1).fill(0);
    table[1] = 1;
    table[2] = 3;
    for(let i = 3; i <= m; i++){
         //오버플로우가 일어나기때문에 마지막에 10007로 나누는게 아니라 중간중간에도 하기.
        table[i] = (table[i-1] + table[i-2] + table[i-2]) % 10007;
    }
    console.log(table[m]);
}
solution(m);