const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const n = input.shift();
let arr = [];
let left = 0;
let right = n - 1;
for(let i = 0; i < n; i++){
    arr[i] = +input[i];
}

function getPivot(left, right){
    let mid = Math.floor((left+right) / 2);

    const temp = arr[left];
    arr[left] = arr[mid];
    arr[mid] = temp;

    const pivot = arr[left];
    let i = left;
    let j = right;

    while(i < j){
        while(arr[j] > pivot){
            j--;
        }
        while(i < j && arr[i] <= pivot){
            i++;
        }

        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    arr[left] = arr[j];
    arr[j] = pivot;

    return j;
}

function quickSort(left, right){
    if(left >= right){
        return;
    }

    const pivotPos = getPivot(left, right);

    quickSort(left, pivotPos - 1);
    quickSort(pivotPos + 1, right);
}

quickSort(left, right);
console.log(arr.join("\n"));