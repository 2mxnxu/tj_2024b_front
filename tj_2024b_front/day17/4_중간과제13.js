/*
    개발순서
        1. 구현할 화면을 스케치 (프로토타입) 구성 작성
            2. 구성한 화면을 HTML과 CSS로 샘플 작성

    3. (JS) 배열타입과 객체타입을 이용한 메모리 구성
        할일코드    할일내용    할일상태
        1           수업듣기    true
        2           밥먹기      false

        - 할일코드 : 할일내용과 할일상태는 중복이 존재하므로 식별자 역할 못함
            - 식별자가 필요한 이유는 수정 또는 삭제시 수정/삭제할 대상이 식별 되어야한다.
        
        - 할일상태 : 할일상태는 '완료'=1/true 또는 '미완료'=0/false 로 표현할 생각
            - true에 '완료' 의미 부여 , false에 '미완료' 의미 부여
                --> 1. if 간소화 2. 메모리 더 작아서 
        - 객체와 샘플 구성 ( 표/테이블= 배열, 가로/행1개 = 객체 1개) 

    4. (JS) 기능/이벤트 구성 : 1.필요한 함수/가능 파악 2. 함수들이 실행되는 조건 3. 각 함수들의 매개변수/리턴값
        - 1. 등록함수 : 실행조건 = [등록]버튼 클릭 시 onclick                   , 매개변수 : / 리턴 값 :
        - 2. 출력함수 : 실행조건 = 1. js실행될때 2.등록/수정/삭제가 성공했을 때   , 매개변수 : / 리턴 값 :
        - 3. 수정함수 : 실행조건 = [수정]버튼 클릭 시 onclick                   , 매개변수 : / 리턴 값 :
        - 4. 삭제함수 : 실행조건 = [삭제]버튼 클릭 시 onclick                   , 매개변수 : / 리턴 값 :

        function 함수명 (매개변수1, 매개변수2) {
            return 리턴값
        }
    5. (JS) 함수별 로직 구현 / 구현된 함수는 실행조건에 맞추어 실행
    
    */

let 할일목록 = [
    {할일코드 : 1, 할일내용 : "수업듣기", 할일상태 : false},
    {할일코드 : 2, 할일내용 : "밥먹기", 할일상태 : true}
]
let 식별번호 = 3;
// [2] 등록함수 (매개변수X, 리턴값 X)
function 등록함수() {
        // 1. [입력] HTML로 부터 입력받은 값(value)를 js로 가져온다.
        let content = document.querySelector('.contentInput').value;
        // 2. [처리] 배열에 저장
        let 할일 = {
            할일코드 : 식별번호, //'식별번호' 변수값을 대입
            할일내용 : content, // 입력받은 'content' 변수값을 대입
            할일상태 : false // 초기값을 false(미완료 의미) 대입
        }
         
        할일목록.push(할일);
        식별번호++
        // 3. [출력]
        console.log(할일목록);
        전체출력함수()
        document.querySelector('.contentInput').value = ``;
        return;
}
// [3] 전체출력함수 (매개변수X, 리턴값 X)
전체출력함수();
function 전체출력함수() {
    // 1. 어디에 , todoBottom,
    let todoBottom = document.querySelector('#todoBottom')    
    // 2. 무엇을
    let html = ``
        for(let index = 0; index<=할일목록.length-1; index++) {
            let info = 할일목록[index];
            // 만약에 index번째의 할일 객체 내 할일상태가 true이면 'success' 클래스명 넣어주고 아니면 '' 공백을 넣는다.
            html += ` 
            <div class="contentBox ${info.할일상태 == true ? 'success' : ''}">
                <div class="content"> ${info.할일내용} </div> 
                <div class="contenBtns"> <button onclick="수정함수(${info.할일코드})" type="button" class="updateBtn">수정</button>
                <button onclick="삭제함수(${info.할일코드})" type="button" class="deleteBtn">삭제</button> </div>
            </div>`
        }
    // 3. 출력
    todoBottom.innerHTML = html;
    return;

}
// [4] 수정함수 (매개변수 : 할일코드 , 리턴값 X)
function 수정함수(수정할일코드) {
    for(let index = 0; index<=할일목록.length; index++) {
        if(할일목록[index].할일코드 == 수정할일코드) {

            할일목록[index].할일상태 = !할일목록[index].할일상태; // false -> true, true -> false (기존에 할일상태가 true/false 값으로 저장되어 있으니까)
            break;
        }
    }
    전체출력함수()
    return;
}
// [5] 삭제함수 (매개변수 : 할일코드 , 리턴값 X)
function 삭제함수(삭제할일코드) {
    // 1. 배열 내 삭제할 요소(객체)를 찾기
    for(let index = 0; index<=할일목록.length; index++) {
        if(할일목록[index].할일코드 == 삭제할일코드) {
            할일목록.splice(index , 1);
            break;
        }
    }
    // 2. 배열 내 요소 삭제 .splice(), 인덱스 필요

    전체출력함수()
    return;
}