/*for(let i =1; i <= 5; i++) {

    if(i == 3) {continue;}
    console.log(i)
}
    */
/*
for (let i = 1; i <= 10; i++) {
    if(i == 5) {
        break;
    }
    console.log(i);
}
    */

// 실습1. 6개의 정수를 입력받아 하나의 배열에 저장하시오
// 조건 : 배열내 중복 X, 배열내 값의 개수가 6개 되면 프로그램 종료
/*
let int_list = []

for( ; ;) {
    let int = Number(prompt('정수입력 : '))
    if(int_list.indexOf(int) != -1) {
        alert('중복입니다.')
        continue;
    }
    int_list.push(int);
    if(int_list.length >= 6) {
        break;
    }
}
console.log(int_list)
*/