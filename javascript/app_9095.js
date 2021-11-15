const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const T = input.shift();
let m = input.map(e => +e);


function solution(n, m){
    for(let i = 0; i < n; i++){
        let table = Array(m[i] + 1).fill(0);
        table[1] = 1;
        table[2] = 2;
        table[3] = 4;
        for(let j = 4; j <= m[i]; j++){
            table[j] = table[j-1] + table[j-2] + table[j-3];
        }
        console.log(table[m[i]]);        
    }
    
}
solution(T, m);