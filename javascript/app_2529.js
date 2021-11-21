const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0];
let char = [];
for(let i = 0; i < n; i++){
    char[i] = input[1].split(" ")[i];
}
let output = [];
let visited = Array(9).fill(false);
let answer = [];

function checkAnswer(){
    
}

function solution(num, count){
    if(count == n + 1){
        if(output.every((elem, index, origin) => {
            if(index < output.length - 1){
                switch(char[index]){
                    case '<':
                        return elem < origin[index+1];
                    case '>':
                        return elem > origin[index+1];
                }
            }
            return true;
        })){
            answer.push(output.join(""));
        }
        return;
    }

    for(let i = num; i < 10; i++){
        if(visited[i]){
            continue;
        }
        output.push(i);
        visited[i] = true;
        solution(num, count+1);
        output.pop(i);
        visited[i] = false;
    }
}
solution(0,0);
console.log(answer[answer.length-1]);
console.log(answer[0]);