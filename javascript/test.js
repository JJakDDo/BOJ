let sum = 0;
let k = 1;
for(let k = 1; k <= 100; k++){
    let miningPrice = 1000 + (2 * k*k);
    let bitcoin = 5300 + 9*k;
    if(miningPrice > bitcoin){
        console.log(miningPrice + " " + bitcoin);
        console.log(k);
        break;
    }
}