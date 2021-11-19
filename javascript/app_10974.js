const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0];

function solution(){
    let num = [];
    for(let i = 0; i < n; i++){
        num[i] = i+1;
    }
    let index;
    do{
        console.log(num.join(" "));
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
}
solution();
