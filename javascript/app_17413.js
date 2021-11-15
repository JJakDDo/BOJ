const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');




function solution(testCase){
    const sArr = testCase.split("");
    let isTag = false;
    let message = "";
    for(let i = 0; i < testCase.length;){
        if(sArr[i] == "<"){
            while(sArr[i] != ">"){
                message += sArr[i++];
            }
        } else {
            let temp = [];
            while(sArr[i] != " " && sArr[i] != "<" && i != testCase.length){
                temp.push(sArr[i++]);
            }
            message += temp.reverse().join("");
        }

        if(sArr[i] == " "){
            message += " ";
            i++;
        } else if(sArr[i] == ">"){
            message += ">";
            i++;
        }
    }
    console.log(message);
}

solution(input[0]);