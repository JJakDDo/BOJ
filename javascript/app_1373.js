const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');


//console.log(parseInt(testCase, 2).toString(8)); 로 해도되지만 
//2진수가 클경우에는 안되기 때문에 3개씩 나눠서 따로 계산 후 합치기
function solution(testCase){
    
    let answer = "";
    while(testCase.length > 0){
        answer = parseInt(testCase.slice(testCase.length > 3 ? testCase.length -3 : 0, testCase.length), 2).toString(8) + answer;
        testCase = testCase.slice(0, testCase.length > 3 ? testCase.length -3 : 0);
    }
    console.log(answer);
}
solution(input[0]);