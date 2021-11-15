const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let m = +input[0];


function solution(m){
    let table = Array(m+1).fill(0);
    for(let i = 2; i <= m; i++){
        table[i] = table[i-1] + 1;
        if(i % 2 == 0){
            table[i] = Math.min(table[i], table[i/2] + 1);
        }
        if(i % 3 == 0){
            table[i] = Math.min(table[i], table[i/3] + 1);
        }
        console.log(table);
    }
    console.log(table[m]);
}
solution(m);