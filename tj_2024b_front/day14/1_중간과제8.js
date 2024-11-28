/*
실습 : 비회원제 게시판 구현하기
    [요구사항]
    1. 게시글 등록 : 비회원제 이므로 제목,내용,비밀번호 입력받아 등록 처리
    2. 게시물 전체 출력 : 날짜(작성일), 제목, 조회수 순으로 전체 게시물 출력 
    3. 게시물 (1개) 상세 출력 : 전체출력화면에서 특정한 제목을 클릭 시 클릭한 게시물의 상세 정보 보여주기
    4. 게시물 삭제 : 상세 출력 화면에서 삭제 버튼 클릭시 비밀번호를 입력받아 일치하면 삭제 처리
    5. 게시물 수정 : 상세 출력 화면에서 수정버튼 클릭시 비밀번호를 입력받아 일치하면 새로운 내용을 입력받아 수정 처리

    [CRUD] C(Create) R(Read) U(Update) D(delete)
    등록        출력            수정            삭제 : 기본 데이터 베이스
    회원가입    마이페이지      회원수정        회원탈퇴
    제품등록    제품목록        제품수정        제품삭제
    게시물쓰기  게시물목록      게시물수정       게시물삭제
    쪽지보내기  받은쪽지보기    쪽지읽은상태수정  쪽지삭제

    [개발순서]
    1. HTML : 프론트엔드 와이어프레임/프로토타입 구성
    2. js : 그 구성된 화면과 요구사항에서 필요한 메모리/데이터 구성
    3. js : 요구사항에 따라 구현할 기능/함수 구성, 함수별 비지니스로직 구성
    4. HTML/JS 연동
    5. 테스트
    6. 유지보수

    방법 - 각 속성별 하나의 문자열로 구성하여 구성된 문자열을 하나의 배열에서 관리
    [csv] : 여러개의 값들을 쉼표(,)로 구분한 텍스트 (문자열)
        - 주의할점 데잍터 자체의 , 가 존재하면 문제가 발생할 수 있다
        - 배열의 요소 ,(쉼표) / csv의 ,(쉼표)
        - 값을 다시 구분할때는 문자열 함수, 문자열.split(',') 이용한 분해 가능

    첫번째게시물 : '첫번째 게시물 제목, 첫번째 게시물 내용, 1234, 2024-11-26, 3'
    두번째게시물 : '두번째 게시물 제목, 두번째 게시물 내용, 4567, 2024-11-27, 2'
    세번째게시물 : '세번째 게시물 제목, 세번째 게시물 내용, 7890, 2024-11-28, 0'
    
    (1)- 하나의 문자열(게시물) 들을 여러개 구성하여 배열 저장
    let 게시물목록 = [ '첫번째 게시물 제목, 첫번째 게시물 내용, 1234, 2024-11-26, 3',
                      '두번째 게시물 제목, 두번째 게시물 내용, 4567, 2024-11-27, 2',
                      '세번째 게시물 제목, 세번째 게시물 내용, 7890, 2024-11-28, 0']

    (2)- 하나의 문자열(게시물) 들을 \n 으로 구분하여 또 하나의 문자열에 구성
    let 게시물목록 = '첫번째 게시물 제목, 첫번째 게시물 내용, 1234, 2024-11-26, 3\n
    두번째 게시물 제목, 두번째 게시물 내용, 4567, 2024-11-27, 2\n
    세번째 게시물 제목, 세번째 게시물 내용, 7890, 2024-11-28, 0'
    
    (3) - 함수/기능 구성
        1. 등록함수 : [등록] 버튼 클릭시 입력받은 3개 값(제목,내용,비밀번호)를 JS 가져와서 배열에 저장 함수 .push
        2. 출력함수 : 배열내 변화(최소실행 1번/ 등록/삭제/수정) 있을 경우 배열내 모든 정보(게시물)를 출력하는 함수 .length
        3. 삭제함수 : [삭제] 버튼 클릭시 비밀번호를 입력받아서 현재 상세게시물의 비밀번호와 일치하면 배열 내 해당 게시물 삭제 함수 .slice
        4. 수정함수 : [수정] 버튼 클릭시 비밀번호를 입력받아서 현재 상세게시물의 비밀번호와 일치하면 새로운 내용을 입력받아 해당 게시물 내용 수정 함수, 배열명[index] = 새로운 값 
    */

    //[1] 게시물들을 관리할 배열 선언, 3개정도 샘플 데이터 초기화, 전역변수O(js가 실행될때 1번 선언) vs 지역변수X : {}가 실행될때 마다 선언
    let 게시물목록 = [ '첫번째 게시물 제목, 첫번째 게시물 내용, 1234, 2024-11-26, 3',
        '두번째 게시물 제목, 두번째 게시물 내용, 4567, 2024-11-27, 2',
        '세번째 게시물 제목, 세번째 게시물 내용, 7890, 2024-11-28, 0']

        //[2]등록함수, 실행조건 : [등록]버튼 클릭 시
        function add() {
            //console.log('등록함수 실행');
            // 1. 입력/저장 , document.querySelector('선택자').value
            let title = document.querySelector('.title').value; //title input 마크업에 입력된 value 값 가져오기
            let content = document.querySelector('.content').value; 
            let password = document.querySelector('.password').value; 

            // 2. 처리 , 입력받은 값들을 하나의 문자열(CSV)구성 -> 배열 저장 .push
            // 사용자에게 입력받지 않고 로직에서 초기화 해주는 변수
            //원하는 날짜 또는 시간 구성하기
                // - 현재 날짜/시간 기능 제공하는 객체를 변수에 저장
            let nowDate = new Date()
            let nowYear = nowDate.getFullYear()
            let nowMonth = nowDate.getMonth() +1;
            let nowDay = nowDate.getDate();
            let date = `${nowYear}-${nowMonth}-${nowDay}`

            let view = 0;
            //5개의 변수들을 하나의(CSV형식) 문자열로 구성
            let board = `${title},${content},${password},${date},${view}` 
            // 구성된 csv문자열을 배열에 저장 .push
            게시물목록.push(board); console.log(게시물목록);
            // 3. 출력 , 출력함수 실행
            print();
        }
        //[3]출력함수, 실행조건 : js열렸을때 최소 1번 실행, 등록/삭제/수정 처리 성공시
        print(); 
        function print() {
            //(1) 어디에 , table > tbody , document.querySelector(선택자)
            let tbody = document.querySelector('table > tbody')
            //(2) 무엇을, 배열 요소들을 정보를 HTML 구성해서
            let html = ''
            for(let index = 0; index <= 게시물목록.length -1; index++) {
                let board = 게시물목록[index];
                let info = board.split(',') // 문자열.split('기준문자') 분해함수 // csv 형식은 ,로 구분했기 때문에 , 다시 분해한다
                // info[0] = 제목 , info[1] = 내용 , info[2] = 비밀번호, info[3] = 날짜, info[4] = 조회수
                html += `<tr>
                <td>${info[3]}</td> 
                <td><a href = "#" onclick="상세출력함수(${index})">${info[0]}</a></td>
                <td>${info[4]}</td>
                </tr>`
            }
            //(3) 출력 , innerHTML
            tbody.innerHTML = html;
        }
        //[3] 상세 출력 함수, 실행조건 : 전체출력화면에서 특정한 제목을 클릭했을 때
        function 상세출력함수(index) { // index : 매개변수 , 상세 출력할 배열의 인덱스 받기
            //console.log('상세출력함수 실행'); console.log(index);
            // 1. 어디에 document.querySelector
            // 2. 무엇을, 배열정보를 HTML로 구성, 선택한 게시물 인덱스의 정보를, index
            let board = 게시물목록[index];
            let info = board.split(',')
            // 3. 출력 innerHTML 
            document.querySelector('.titleBox').innerHTML = info[0];
            document.querySelector('.contentBox').innerHTML = info[1];
            document.querySelector('.dateBox').innerHTML = info[3];
            document.querySelector('.viewBox').innerHTML = info[4];
            document.querySelector('.btnBox').innerHTML = `<button onclick="drop(${index})" type="button">삭제</button>
        <button type="button">수정</button>`
        }
        //[4]삭제함수, 실행조건 : [삭제] 버튼 클릭 시
        function drop(index) {
            //console.log('삭제');
            //console.log(index);
            // 1. 배열내 특정한 인덱스의 요소 제가, 베열변수명.splic(삭제할인덱스, 개수)
            게시물목록.splice(index,1)
            print();
        } 
        //[5]수정함수, 실행조건 : [수정] 버튼 클릭 시
        function modify() {}
