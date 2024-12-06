/*
    세션 이용한 회원가입/로그인 구현
*/

// [1] 회원가입 함수 정의
    // - 함수를 언제사용할건지 - 회원가입 버튼을 클릭했을때
    // - 함수의 인자값(매개변수) X
    // - 함수의 리턴값(반환) X
    // let memberList = [] <-- 회원목록을 세션/쿠키에 저장

function 회원가입함수() {
    
    // 1. [입력]
    let id = document.querySelector('.signId').value;
    let pw = document.querySelector('.signPw').value;
    // 2. [처리]
    let member = { 'id':id, 'pw' : pw }; // 입력받은 값으로 객체 생성

        // * 회원목록정보를 전역변수에 선언하지 않고 세션/쿠키 저장 
        //-> JS외부 (브라우저)에 저장하면 JS가 새로고침/변화가 있어도 저장유지
        // (1) 현재 회원정보를 저장하기 위한 회원정보목록을 세션에서 가져오기
        let memberList = sessionStorage.getItem('memberList');
        console.log(memberList); 
        // (2) 회원정보목록이 존재하면 존재하지 않으면
        if(memberList == null) {
            //만약에 가져온세션데이터(memberList)가 null(없다면)
            memberList = []; // 빈 배열 생성
        }
        else {
            // 가져온 세션 데이터 (memberList) 존재하면
            // 문자열 ---> 객체(JSON) 변환
            memberList = JSON.parse(memberList);
        }
        console.log(memberList);
        //배열에 입력받은 객체 저장
        memberList.push(member); console.log(memberList);

        // 변화가 있는 배열을 세션 / 쿠키 다시 저장( 새로고침 )
        // (1) key와 value 구성된 세션 정보를 저장하는데 value 값 (배열 -> 문자열) 타입으로 변환하여 저장
        sessionStorage.setItem('memberList', JSON.stringify(memberList))
    // 3. [출력]

    return; // 함수 종료, 값 없을땐 생략 가능
}

// [2] 로그인 함수, [로그인] 버튼 클릭했을때
function 로그인함수() {

    let loginId = document.querySelector('.loginId').value;
    let loginPw = document.querySelector('.loginPw').value;

    let memberList = 회원정보목록반환함수()

    for(let index = 0; index <= memberList.length-1; index++) {
        let info = memberList[index]; // index 번째의 회원정보 객체 호출
        if(info.id == loginId && info.pw == loginPw) {
            alert('로그인성공')
            return;
        }
        
    }
    alert('동일한 회원정보가 없습니다. 로그인 실패')
    return;
}

// [3] 세션에 있는 회원정보목록 반환 함수
function 회원정보목록반환함수() {
    
        let memberList = sessionStorage.getItem('memberList');
        console.log(memberList); 
        if(memberList == null) {
            memberList = []; 
        }
        else {
            memberList = JSON.parse(memberList);
        }
        return memberList;
}