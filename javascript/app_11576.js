const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let bases = input[0].split(" ").map(e => +e);
let m = +input[1];
let num = input[2].split(" ").map(e => +e);

function converToBase10(n, base){
    let answer = 0;
    for(let i = n.length - 1; i >= 0; i--){
        answer += Math.pow(base, i) * n[n.length - 1 - i];
    }
    return answer;
}

function converToBaseB(n, base){
    let answer = [];
    while(n > 0){
        answer.unshift(n % base);
        n = Math.floor(n / base);
    }
    return answer;
}

function solution(bases, m, num){
    const Abase = bases[0];
    const Bbase = bases[1];
    
    console.log(converToBaseB(converToBase10(num,  Abase), Bbase).join(" "));
}
solution(bases, m, num);