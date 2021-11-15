const fs = require('fs');
const { isPrimitive } = require('util');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let m = +input[0];


function solution(m){
    let i = 2;
    let answer = [];
    while(m > 1){
        if(m % i == 0){
            answer.push(i);
            m /= i;
        } else {
            i++;
        }
    }
    console.log(answer.join("\n"));
}
solution(m);