function solution(n){
    let answer = 0;
    let base = 0;
    let i = 0;
    let cnt = 1;
    while(n >= 0){
        i = Math.pow(10, base++);
        if(n - (9 * i) >= 0){
            n -= 9 * i;
            answer += 9 * i * cnt++;
        } else {
            answer += n * cnt;
            break;
        }
    }
    console.log(answer);
}

const { POINT_CONVERSION_COMPRESSED } = require('constants');
const { FORMERR } = require('dns');
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');

solution(+input[0]);