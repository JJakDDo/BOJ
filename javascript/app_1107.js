function solution(number, m, broken){
    let answer = 1000001;
    for(let i = 0; i < 1000000; i++){
        if(i.toString().split("").every(elem => !broken.includes(elem))){
            answer = Math.min(Math.abs(i - number) + i.toString().length, answer);
        }
        answer = Math.min(Math.abs(number - 100), answer);
    }
    console.log(answer);
}

const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');

solution(+input[0], +input[1], input.length >= 3 ? input[2].split(" ") : []);