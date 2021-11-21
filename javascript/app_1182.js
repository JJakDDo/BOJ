const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0].split(" ")[0];
let s = +input[0].split(" ")[1];
let nums = input[1].split(" ").map(e => +e);
let answer = 0;
function solution(num, bit, count){
    if(num == count){
        let sum = 0;
        bit.toString(2).padStart(n, '0').split("").forEach((elem, idx) =>{
            if(elem == 1){
                sum += nums[idx];
            }
        });
        if(sum == s){
            answer++;
        }
        return;
    }
    for(let i = num; i < n; i++){
        /*
        bit |= (1 << j);
        }*/  
        if((bit & (1 << i)) != 0){
            continue;
        }  
        solution(i+1, bit | (1 << i), count);
    }
    
}
for(let i = 1; i <= n; i++){
    solution(0, 0, i);
}
console.log(answer);