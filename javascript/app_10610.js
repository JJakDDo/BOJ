const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let num = input.shift().split("").map(e => +e).sort((a,b) => b-a);
let answer = -1;
let n = num.length;
let index;
if(num[n-1] == 0){
    do{
      if(num.join("")%30 == 0){
          answer = num.join("");
          break;
      }
      index = -1;
      for(let i = n-3; i >= 0; i--){ 
        if(num[i] > num[i+1]){ 
          index = i;
          break;
        }
      }
      if(index < 0){
          break; 
      } else {
        for(let i = n-2; i > index; i--){
          if(num[i] < num[index]){  
            const temp = num[i]; 
            num[i] = num[index];
            num[index] = temp;
            break;
          }
        }
        num = [...num.slice(0, index+1), ...num.slice(index+1, n).reverse(), 0]; 
      } 
    } while(index >= 0)

    console.log(answer);
} else {
    console.log(-1);
}