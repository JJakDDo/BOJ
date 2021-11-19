const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0];
//next_permutation을 사용 시 먼저 수열을 sort 한 뒤에 해야 전체를 탐색할 수 있음
//next_permutation은 앞자리가 안바뀜
let num = input[1].split(" ").map(e => +e).sort((a,b) => a-b);

function solution(){
    let index;
    let max = 0;
    do{
        let sum = 0;
        for(let i = 0; i < n-1; i++){
            sum += Math.abs(num[i] - num[i+1]);
        }
        max = Math.max(sum, max);
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
    console.log(max);
}
solution();
