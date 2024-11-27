/*
    변수 유호범위
        1. 전역 변수 : 특정한 { }안에서 선언 하지 않는 변수
        2. 지역 변수 : 특정한 { }안에서 선언한 함수
        3. 매개 변수 : 함수호출 시 인자값을 저장하는 변수

*/

/* 
    js파일 사용 범위
    1. <head><script src="4_함수.js"></script></head>
    body가 구성되기 전에 읽어드린다
    2. <body></body> 마크업 가장 하단에 <script src="4_함수.js"></script> body 내 마크업들을 구성하고 스크립트를 읽어드린다
    3. 여러 js 파일이 하나의 html 에서 호출될 때 변수/함수 서로 공유 가능 - 순서는 위에서 아래로 호출
*/

let sss = '전역변수' ;
document.write(`${sss}`);

for(i=0; i<1; i++) {
    let ss = '지역변수';
    document.write(`${ss}`);
}