const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');


function solution(testCase){
    let n = testCase[0];
    let r = testCase[1];
    let twos = 0;
    let fives = 0;
    for(let i = n; i > 1; i/=2){
        twos += Math.floor(i / 2);
    }
    for(let i = r; i > 1; i/=2){
        twos -= Math.floor(i / 2);
    }
    for(let i = n-r; i > 1; i/=2){
        twos -= Math.floor(i / 2);
    }
    for(let i = n; i > 1; i/=5){
        fives += Math.floor(i / 5);
    }
    for(let i = r; i > 1; i/=5){
        fives -= Math.floor(i / 5);
    }
    for(let i = n-r; i > 1; i/=5){
        fives -= Math.floor(i / 5);
    }
    console.log(Math.min(twos, fives));
}
solution(input[0].split(" ").map(e => +e));

