const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');


function solution(testCase){
    let message = [];
    let answer = "";
    //console.log(testCase.match(/[\d]/g));
    //message = testCase.match(/[a-z]/g).length + " " + testCase.match(/[A-Z]/g).length;
    for(let i = 0; i < testCase.length-1; i++){
        if(testCase[i].match(/[a-z]/g)){
            message.push(testCase[i].match(/[a-z]/g).length);
        } else {
            message.push(0);
        }
        if(testCase[i].match(/[A-Z]/g)){
            message.push(testCase[i].match(/[A-Z]/g).length);
        } else {
            message.push(0);
        }
        if(testCase[i].match(/[\d]/g)){
            message.push(testCase[i].match(/[\d]/g).length);
        } else {
            message.push(0);
        }
        if(testCase[i].match(/[ ]/g)){
            message.push(testCase[i].match(/[ ]/g).length);
        } else {
            message.push(0);
        }
        answer += message.join(" ");
        if(i != testCase.length-1){
            answer += "\n";
        }
        message = [];
    }
    console.log(answer);
}
solution(input);