// - new date() 현재 시스템(pc)의 날짜/시간 반환 객체 또는 함수
// 1. 
console.log(new Date()) // Wed Dec 04 2024 10:33:23 GMT+0900 (한국 표준시)
// 2.
console.log(new Date().getFullYear()) // 2024
console.log(new Date().getMonth()) // 11, 0: 1월 11: 12월
console.log(new Date().getDate()) // 4
console.log(new Date().getDay()) // 3, 요일 , 0 : 월 , 1: 화 ~
console.log(new Date(2023, 4, 20)) // Sat May 20 2023 00:00:00 GMT+0900 (한국 표준시)

let today = new Date();
let year = new Date().getFullYear();
let month = new Date().getMonth()+1;

// 달력의 일정
let contentArray = [
    { cno : 1, content : '학원개강', date : '2024-12-4', color:'red'},
    { cno : 2, content : '은행업무', date : '2024-12-10', color:'blue'},
    { cno : 3, content : '친구약속', date : '2024-12-21', color:'pink'},
    { cno : 4, content : '월급날', date : '2024-12-15', color:'gray'}
];

calPrint(); 

// [1] 달력 출력함수
function calPrint() {
    // (1) 상단의 달력 연도/월 표시
        //어디에
        let h6 = document.querySelector('#calTop > h6')
        //무엇을
        let html = `${year}년 ${month}월`
        //출력
        h6.innerHTML = html;
    // (2) 하단의 현재 연도/월의 일 표시
        let calBottom = document.querySelector('#calBottom')
        let html2 = ``
        //요일
        html2 = `<div class="week sunday">일</div><div class="week">월</div><div class="week">화</div><div class="week">수</div><div class="week">목</div><div class="week">금</div><div class="week">토</div>`;
        //1 ~ 마지막 일까지 출력
        //(1) 현재 날짜에 마지막 일 구하기
        let date = new Date(year, month, 0); // 지정한 연도와 월에 해당하는 전달의 날짜의 말일
        console.log(date); // Tue Dec 31 2024 00:00:00 GMT+0900 (한국 표준시)
        let endDay = date.getDate(); // 31
    
        //(2) 현재 날짜의 1일의 요일, 1일의 시작 위치를 찾기 위해서
        let date2 = new Date(year, month-1, 1) //지정한 연도와 월에 해당하는 날짜의 첫날 그래서 month-1 해줌
        console.log(date2); // Wed Jan 01 2025 00:00:00 GMT+0900 (한국 표준시)
        let startWeek = date2.getDay();
        console.log(startWeek);
        // + 각 월의 1일 전까지 공백 출력
        for(let blank=1; blank <= startWeek; blank++) {
            html2 += `<div></div>`
        }

        // 달력의 날짜 출력 + 현재일정도 같이 출력
        for(let day = 1; day<=endDay; day++) {
            // 일정출력
                // 현재날짜 형식 구성
                let date3 = `${year}-${month}-${day}`
                console.log(date3)
                // 현재 날짜와 등록된 일정날짜와 동일한 일정 찾기/검색
                let planHtml = ``
                for(let index = 0; index <= contentArray.length-1; index++) {
                    let plan = contentArray[index];
                        if(plan.date == date3) {
                            planHtml += `<div style = "background-color : ${plan.color}">  ${plan.content}</div>`
                        }
                }

            // 일 출력
            html2 += `<div>${day} ${planHtml}</div>`
        }        
        calBottom.innerHTML = html2;
    return;
}
// [2] 월 변경함수 (이전달, 다음달)
function monthChange( changeMonth ) {
    console.log(changeMonth);

    month += changeMonth;

    // 2. 월은 최소 1일 부터 12월까지
    if(month<1) {
        year--; month = 12;
    }
    if(month>12) {
        year++; month = 1;
    }

    calPrint();
    return;
}