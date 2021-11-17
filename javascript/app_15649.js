
/*
function permutation(arr, num){
    const result = [];
    if(num == 1){
        return arr.map(e => [e]);
    }

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
        const permut = permutation(rest, num-1);
        const attached = permut.map(e => [fixed, ...e]);

        result.push(...attached);
    })

    return result;
}

function solution(n, m){
    const arr = [];
    for(let i = 1; i <= n; i++){
        arr[i-1] = i;
    }
    permutation(arr, m).forEach(e => {
        console.log(e.join(" "));
    });
}

const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');

solution(+input[0].split(" ")[0], +input[0].split(" ")[1]);
*/



const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0].split(" ")[0];
let m = +input[0].split(" ")[1];

let visited = Array(n + 1).fill(false);
let output = [];
let answer = "";

function solution(num){
    if(num == m){
        answer += `${output.join(" ")}\n`;
    }

    for(let i = 1; i <= n; i++){
        if(visited[i]){
            continue;
        }
        visited[i] = true;
        output.push(i);
        solution(num+1);
        output.pop();
        visited[i] = false;
    }
}
solution(0);
console.log(answer);