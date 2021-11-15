const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
input = input[0].split(" ")

function solution(n, base){
    console.log(parseInt(n , base));
}
solution(input[0], +input[1]);