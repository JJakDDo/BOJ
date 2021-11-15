const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');


function solution(testCase){
    answer = "";
    if(testCase == 0){
        console.log("0");
    } else {
        while(testCase !=  1){
            answer = Math.abs(Math.ceil(testCase % 2)) + answer;
            testCase = Math.ceil(testCase/-2);
        }
        console.log("1" + answer);

    }
}
solution(+input[0]);