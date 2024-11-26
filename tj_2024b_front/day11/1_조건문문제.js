/*let int1 = Number( prompt('[1] int1 : '));
let int2 = Number( prompt('[1] int2 : '));
let int3 = Number( prompt('[1] int3 : '));

let sum = int1 + int2 + int3;

if (sum >= 90) {
    console.log('[1] 결과 : 성공')
}
else {
    console.log('[1] 결과 : 실패')
}
*/


/*let int1 = Number( prompt('[1] int1 : '));
let int2 = Number( prompt('[1] int2 : '));
if (int1<int2) {
    console.log(`[2] 결과 : ${int2} `)
}
else {
    console.log(`[2] 결과 : ${int1} `)
}
  */

/*
let int1 = Number( prompt('[1] int1 : '));
let int2 = Number( prompt('[1] int2 : '));
let int3 = Number( prompt('[1] int3 : '));

let arr = [int1, int2, int3]
arr.sort(function(a, b)  {
    return a - b;
  });
  console.log(arr);
*/


/*let int1 = Number( prompt('[1] int1 : '));
 if (int1>90) {
    console.log("A")
 }
 else if (int1>80) {
    console.log("B")
 }
 else if (int1>70) {
    console.log("C")
 }
    else {
    console.log("재시험")
 }
*/

/*
let id = ( prompt('[1] id : '));
let pw = ( prompt('[1] pw : '));

if (id == 'admin' && pw == '1234') {
    console.log("로그인 성공")
    }
    else {
        console.log("로그인 실패")
    }
*/

/*
let fruitList = ['바나나','사과']
let fruit = ( prompt('[1] 과일 : '));

if(fruit == fruitList[0] | fruit == fruitList[0] ) {
    console.log("이미 존재하는 과일입니다")
}
else {
    fruitList.push(`${fruit}`)
    console.log(`${fruitList}`)
} 
    설명 indexOf('찾을 값') - 지정핝 찾을값이 배열내 존재하면 찾은인덱스 변환 없으면 -1 변환
*/

/*
let id = ( prompt('[1] id : '));
    var i = id;
    var d = i.substring(7,8);
    if(d == 1 | d == 3) {
        console.log("blue")
    }
    else {
        console.log("red")
    }
        숫자 여러개 입력시 숫자 배열로 만들어짐 - indexOf 쓸 수 있음
*/

/*
let p1 = prompt('[9] 플레이어1 (0-가위, 1-바위, 2-보)')
let p2 = prompt('[9] 플레이어2 (0-가위, 1-바위, 2-보)')

if (p1 == p2) {
    console.log('[9] 무승부') }
    else if (p1 == (p2+1)%3) {
        console.log('[9] 플레이어1 승리') 
    }
    else {
        console.log('[9] 플레이어2 승리')
    }
        */

    /*
let sheetList = ['O', 'X' ,'O']
let 예약좌석번호 = Number( prompt ('[10] 좌석: 1, 2, 3 :'))

if(sheetList[예약좌석번호 -1] == "O") {
    console.log('[10] 예약 불가') 
}
else {
    console.log('예약성공')
    sheetList[예약좌석번호 -1] == "O";
}
    */

let carArray = [ '250어7142' , '142가7415' ]
let locationArray = [ 'A1' , 'B3' ] 

let carnum = prompt('[11] 차량번호 :')
let f_index = carArray.indexOf(carnum)

if (f_index == -1) {
    console.log('차량번호를 찾을 수 없습니다.')
}
else{
    console.log(`입력한 차량번호의 주차 위치 : ${locationArray[찾은인덱스]}`)
}