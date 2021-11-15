const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const s = input.shift();
const N = input.shift();
const inputs = [];
for(let i = 0; i < N; i++){
    inputs.push(input[i]);
}



function solution(s, testCase){
    let ci = s.length;
    testCase.forEach((elem, idx) => {
        const el = elem.split(" ");
        switch(el[0]){
            case "P":
                s = s.slice(0, ci) + el[1] + s.slice(ci);
                ci++;
                break;
            case "L":
                if(ci != 0){
                    ci--;
                }
                break;
            case "D":
                if(ci != s.length){
                    ci++;
                }
                break;
            case "B":
                if(ci != 0){
                    s = s.slice(0, ci-1) + s.slice(ci);
                    ci--;
                }
                break;
            default:
                break;
        }
    });
    console.log(s);
}

solution(s, inputs);