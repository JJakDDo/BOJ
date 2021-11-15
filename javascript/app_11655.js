const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');


function solution(testCase){
    let answer = ""
    let t = testCase.split("");
    for(let i = 0; i < t.length; i++){
        if(/[a-z]/.test(t[i])){
            let char = (t[i].codePointAt(0) + 13 - 97) % 26 + 97;
            answer += String.fromCharCode(char);
        } else if(/[A-Z]/.test(t[i])){
            let char = (t[i].codePointAt(0) + 13 - 65) % 26 + 65;
            answer += String.fromCharCode(char);
        } else {
            answer += t[i];
        }
    }
    console.log(answer);
}
solution(input[0]);