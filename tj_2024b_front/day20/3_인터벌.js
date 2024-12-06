/*
    interval(간격) 
        - 시간적인 간격에 따라 특정 함수 반복 실행/호출
        1. setInterval(함수, 주기);
            함수 : 주기에 따라 실행한 함수
            주기 : 1/1000초 (밀리초), 1000 : 1초, 10000 : 10초
            -> 주기 마다 지정한 함수를 실행한다.
        2. clearInterval( 종료할일터벌변수) : interval 종료  

*/
// [1] 예제1
let value = 0;

function 증가함수() {

    value++;
    document.querySelector('.box1').innerHTML = value;
}

setInterval(증가함수, 1000);

// [2] 예제2
function 시계함수() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    document.querySelector('.box2').innerHTML = `${hour} : ${minute} : ${second}`

}
setInterval(시계함수, 1000);

// [3] 예제3
let time = 0;
let timerId; //변수만 선언, 초기화 값 X
function 타이머() {
    time++;
    document.querySelector('.box3').innerHTML = time;
}

function 타이머시작함수() {
    timerId = setInterval(타이머, 1000);
}

function 타이머함수종료() {
    clearInterval( timerId )
}