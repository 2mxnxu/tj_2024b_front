/*
for문 형태 - for(초기값;, 조건문;, 증감식) {
    실행문;
}
*/
/*
let i;
let sum = 0;
for(i=1; i<=10; i++) {
    sum = sum+i
}
console.log(sum);
*/
/*
let i 
for(i=1; i<=9; i++) {
    console.log(`2*${i}=${2*i}`);
}
    */
let i
let j
let mult = 0
for(i=1; i<=9; i++) {
    for(j= 1; j<=9; j++) {
        mult = i*j
        console.log(`${i} * ${j} = ${mult}`)
    }
}