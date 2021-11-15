const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const T = input.shift();
let m = input[0].split(" ").map(e => +e);


function solution(n, m){
    let table = Array(n + 1).fill(0);
    table[1] = m[0];
    for(let i = 2; i <= n; i++){
        table[i] = m[i-1];
        for(let j = i; j > i / 2; j--){
            table[i] = Math.min(table[i], table[j-1] + table[i-j+1])
        }
    }
    console.log(table[n]);   
    
}
solution(T, m);