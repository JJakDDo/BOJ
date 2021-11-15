const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let T = +input.shift();
input = input.map(e => +e);

function isPrime(a){
    for(let i = 2; i <= Math.sqrt(a); i++){
        if(a % i == 0){
            return false;
        }
    }
    return true;
}

function solution(n, testCase){
    const arr = Array(1000000).fill(-1);
    arr[0] = false;
    arr[1] = false;
    for(let i = 2; i < arr.length; i++){
        if(arr[i] == -1){
            if(isPrime(i)){
                arr[i] = true;
                for(let j = i*2; j < arr.length; j+=i){
                    arr[j] = false;
                }
            }
        }
    }
    for(let i = 0; i < n; i++){
        let answer = 0;
        for(let j = 2; j <= testCase[i] / 2; j++){
            if(arr[j] && arr[testCase[i] - j]){
                answer++;
            }
        }
        console.log(answer);
    }
}
solution(T, input);