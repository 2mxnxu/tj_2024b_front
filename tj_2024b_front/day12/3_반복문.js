/*for(let i = 1; i<=3; i++) {
    console.log(i);
    for(let j = 1; j <=5; j++){
        console.log(`---->${j}`);
    }
}
    */

/*
let i
let j
let mult = 0
for(i=2; i<=9; i++) {
    for(j= 1; j<=9; j++) {
        mult = i*j
        console.log(`${i} * ${j} = ${mult}`)
    }
}
*/

let i
let j
let out = '';
let num =  prompt("")
for(i = 1; i<= num; i++){
    for(j = 1; j<=i; j++) {
        out += '*'
    }
    out += '\n'
}
console.log(out)