const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0];
let w = [];
for(let i = 0; i < n; i++){
    w[i] = [];
    let temp = input[i+1].split(" ").map(e => +e);
    for(let j = 0; j < n; j++){
        w[i][j] = temp[j];
    }
}
function solution(){
    let index;
    let min = 10000000;
    let num = [];
    for(let i = 0; i < n; i++){
        num[i] = i;
    }

    do{
        let sum = 0;
        for(let i = 0; i < n; i++){
            if(i == n-1){
                if(w[num[i]][num[0]] == 0){
                    sum = 10000000;
                    break;
                }
                sum += w[num[i]][num[0]];
            }
            else {
                if(w[num[i]][num[i+1]] == 0){
                    sum = 10000000;
                    break;
                }
                sum += w[num[i]][num[i+1]];
            }
        }
        min = Math.min(sum, min);
        index = -1;
        for(let i = n-2; i >= 0; i--){
            if(num[i] < num[i+1]){
                index = i;
                break;
            }
        }
        if(index < 0){
            break;
        } else {
            for(let i = n-1; i > index; i--){
                if(num[i] > num[index]){
                    const temp = num[i];
                    num[i] = num[index];
                    num[index] = temp;
                    break;
                }
            }
            num = [...num.slice(0, index+1), ...num.slice(index+1).reverse()];
        }
    } while(index >= 0)
    console.log(min);
}
solution();
