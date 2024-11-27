function func1() {
    console.log('func1 execute')
}

let 이름명단 = [] // -> 전역변수 배열
function 등록함수 () {
    // - DOM 객체(document) : HTML를 조작 가능한 객체
    //document.querySelector('.클래스 명')
    //document.querySelector('#id 명')
    //document.querySelector('마크업명')

    //1. html input 마크업을 (객체) js로 가져오기
    let input = document.querySelector('.nameInput')
    //2. input(객체) 에서 입력된 value 호출하기
    let data = input.value;
    //3. 'data' 변수의 값을 '이름명단' 전역변수 배열로 대입
    이름명단.push(data);
    // 4. 배열에 push 이후에 출력(새로고침)을 한다
    출력함수();
}

// '출력함수' 함수 정의 : 배열(이름명단)의 변화(등록)가 있을 때 화면(HTML) 새로고침(출력) 하는 함수
function 출력함수() {
    let html = ``; // (1) 출력할 HTML 구성할 변수 선언
    // - 배열순회 : 배열내 모든 요소들을 하나씩 호출
    for(let index = 0; index <= 이름명단.length -1; index++) {
        //console.log(이름명단[index])
        html += `<div> ${이름명단[index]} </div>` // 출력할 HTML 변수에 배열 내 데이터를 누적한다
        
    }
    console.log(html)
    document.querySelector(`.printBox`).innerHTML = html
        // HTML 출력, 특정한 구역의 출력, inner : <시작마크업> innerHTML </끝마크업>
}
