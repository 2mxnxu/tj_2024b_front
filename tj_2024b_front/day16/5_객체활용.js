/*
    - 사원 정보와 각 사원의 연도별 점수평가 메모리 구성
    1. 저장할 데이터들을 모두 생각한다.
        사원명, 생년월일, 연도, 상반기점수, 하반기점수
    2. 데이터끼리 관계성 파악해서 분류하기
        - 사원정보(사원명, 생년월일), 점수(연도, 상반기점수, 하반기점수)
        - 상하관계, 일 대 다 관계, 하나의 데이터가 다른데이터에서 여러개를 참조한다.
            - 하나의 사원이 여러개 연도별 점수를 가질 수 있다.
    3. 데이터 분류 간의 관계성 연결
        - 사원정보(상위), 점수정보(하위)
        
        1. 유재석 정보 등록, 유재석 2002-10-02
        2. 유재석 2024점수 등록, 유재석 2002-10-02 2024 90 80
        3. 유재석 2023점수 등록, 유재석 2002-10-02 2024 90 80 2023 100 97
            유재석 2002-10-02 -----> 2024 90 80
                             -----> 2023 100 97
            1 유재석 2002-10-02 ----> 1 2024 90 80
                                ----> 1 2023 100 97
*/
// [*] 사원번호 전역변수
let eno = 3; // <--- 샘플 2개(사원2명)이라 다음 등록된 사원번호는 3부터 시작
// [1] 객체지향으로 메모리 구성
    // 1. 두 사원의 정보를 샘플로 해서 2개의 객체 생성
let 사원1 = {no : 1, name : '유재석', birth : '2000-10-02'}
let 사원2 = {no : 2, name : '강호동', birth : '1980-01-25'}
    // 2. 사원목록 등록
let 사원목록 = []
사원목록.push(사원1);
사원목록.push(사원2);
console.log(사원목록);
    // 3. 평가 등록
let 점수1 = {no : 1, year : '2024', first : 100, second : 80 }; // 유재석 2024 평가 등록
let 점수2 = {no : 2, year : '2024', first : 92, second : 71 }; // 강호동 2024 평가 등록
let 점수3 = {no : 1, year : '2023', first : 82, second : 92 }; // 유재석 2023 평가 등록
    // [4] 평가목록 등록
let 평가목록 = []
평가목록.push(점수1);
평가목록.push(점수2);
평가목록.push(점수3);
console.log(평가목록); 

// [1] 사원등록함수
function 사원등록() {
    // 1. 입력
    let name = document.querySelector('.name').value;
    let birth = document.querySelector('.birth').value;
    // 2. 처리
    // - 입력받은 값을 객체 {속성명 : 입력받은 값} 로 만들기
    let info = {
        no : eno,
        name : name,
        birth : birth
    }
    사원목록.push(info);

    eno++; // 만일 사원등록 성공시 eno(사원번호) 1 증가한다.
    // 3. 출력
    //console.log(사원목록)
    사원전체출력();

}

// [2] 사원 정보 전체 출력함수, 실행조건 : 1. js 실행될때 최초 1번 2. 사원목록(배열) 변화 (저장/수정/삭제)가 있을 때 마다
function 사원전체출력() {

    // 1. 어디에
    let tbody = document.querySelector('.사원테이블');
    // 2. 무엇을
    let html = ``;
    for (let index = 0; index<=사원목록.length-1; index++) {
        let info = 사원목록[index];
        html += `<tr>
                <td>${info.name}</td>
                <td>${info.birth}</td>
                <td>
                    <button onclick= "평가등록출력(${info.no})" type = "button"> 평가등록 </button>
                    <button onclick="사원평가목록(${info.no})" type = "button"> 평가결과 </button>
                </td>
        </tr>`
    }
    // 3. 출력
    tbody.innerHTML = html;
}

function 평가등록출력(클릭된사원번호) {
    console.log(클릭된사원번호);
    // 사원번호를 이용한 사원정보 찾기
    for(let index = 0; index <= 사원목록.length-1; index++) {
        let info = 사원목록[index];
        if(info.no == 클릭된사원번호) {
            검색사원 = info;
            break;
        }
    }
    if (검색사원 == null) { 
        alert("사원정보가 없습니다");
        return;
    }
    // 1. 어디에
    let div = document.querySelector('.평가입력구역')
    // 2. 무엇을
    let html = `<h3>사원 평가 등록</h3>
        <form>
            <h5>${검색사원.name}</h5>
            평가연도 <input class="year" type="text"/>
            상반기평가 <input class="first" type="text"/>
            하반기평가 <input class="second" type="text"/>
            <button onclick="점수등록()" type="button">점수등록</button>
            </form>`
    // 3. 출력
    div.innerHTML = html;
}


function 점수등록() {
    let year = document.querySelector('.year').value;
    let first = document.querySelector('.first').value;
    let second = document.querySelector('.second').value;

    let info = {
        year : year,
        first : first,
        second : second
    }
    평가목록.push(info);
    평가목록출력();
}


function 평가목록출력() {
        
        let tbody = document.querySelector('.점수목록');
        let html = ``;
        for (let index = 0; index<=평가목록.length-1; index++) {
            let info = 평가목록[index];
            html += `
            <tr>
                    <td>${info.year}</td>
                    <td>${info.first}</td>
                    <td>${info.second}</td>
            </tr>`
        }
        tbody.innerHTML = html;
}

function 사원평가목록(클릭된사원번호) {
    console.log(클릭된사원번호);
    // 사원번호를 이용한 사원정보 찾기
    for(let index = 0; index <= 사원목록.length-1; index++) {
        let info = 사원목록[index];
        if(info.no == 클릭된사원번호) {
            검색사원 = info;
            break;
        }
    }
    if (검색사원 == null) { 
        alert("사원정보가 없습니다");
        return;
    }
    // 1. 어디에
    let div = document.querySelector('.평가입력구역')
    // 2. 무엇을
    let html = `<h3>사원 평가 등록</h3>
        <form>
            <h5>${검색사원.name}</h5>
            평가연도 <input class="year" type="text"/>
            상반기평가 <input class="first" type="text"/>
            하반기평가 <input class="second" type="text"/>
            <button onclick="점수등록()" type="button">점수등록</button>
            </form>`
    // 3. 출력
    div.innerHTML = html;
    

}

