let 주차정보목록 = ["빈좌석","빈좌석","빈좌석","111어1111,10:14:30","빈좌석",
                    "빈좌석","빈좌석","빈좌석","빈좌석","빈좌석",
                    "빈좌석","빈좌석","222어2222,10:15:30","빈좌석","빈좌석",
                    "빈좌석","빈좌석","빈좌석","빈좌석","빈좌석"]

console.log(주차정보목록);

function 입차함수() {
    // 1. [입력] 차량번호 / 주차위치를 HTML에서 입력받은 값을 JS로 가져온다
    let carNum = document.querySelector(".inCarNum").value; 
    let carLoc = document.querySelector(".inCarLoc").value; 

    if (carLoc === "" || carNum === "") {
      alert("주차 자리와 차량 번호를 모두 입력해주세요!");
      return;
    }
    // (검사1) 빈좌석인지 체크
    if(주차정보목록[carLoc-1] != "빈좌석") {
        alert("이미 주차된 자리입니다!");
      return; // return : 함수종료 = 함수가 종료되므로 아래 코드는 실행되지 않는다
    }
    else {
        alert("주차성공!");
    }
    let today = new Date();   
        let hours = today.getHours(); 
        let minutes = today.getMinutes();  
        let seconds = today.getSeconds();  
            let time = `${hours}:${minutes}:${seconds}`

    // 2. [처리] 1. 빈좌석인지 확인 2.두 정보를 하나의 문자열(CSV)로 구성해서 주차정보목록(배열) 저장
    주차정보목록[carLoc-1] = `${carNum} ${time}`; console.log(주차정보목록);
}
    //주차정보목록.push(board);
    // 3. [출력] 처리 결과 내용을 출력한다
    console.log('현재주차현황')
    console.log(주차정보목록);
    
    

function 출차함수() {
    // 1. [입력] 차량번호 / 주차위치를 HTML에서 입력받은 값을 JS로 가져온다
    let outCarNum = document.querySelector('.outCarNum');
    // 2. [처리] 입력받은 차량번호의 입차시간과 현재시간(출차시간)을 초 로 환산하여 요금 계산
    // 증거/기록, 상태 저장 용도 변수 활용
    let searchOk = false;
    for(let index = 0; index <= 주차정보목록.length -1; index++) {
        let carNum = 주차정보목록[index]
        if(carNum == '빈좌석') {
            continue;
        }

        let 차량 = carNum.split(",");
        let inCarNum = 차량[0];
        let 입차시간 = 차량[1];
        if( inCarNum == outCarNum) {
            searchOk = true;
            //요금계산
            let 출차시 = new Date().getHours();
            let 출차분 = new Date().getMinutes();
            let 출차초 = new Date().getSeconds();

            let 출차시간환산 = (출차시*360) + (출차분*60) + (출차초)
            let 입차시 = Number (입차시간.split(":") [0])
            let 입차분 = Number(입차시간.split(":") [1])
            let 입차초 = Number(입차시간.split(":") [2])
            let 입차시간환산 = (입차시*360) + (입차분*60) + (입차초)
            let 사용시간 = 출차시간환산 - 입차시간환산
            let 사용금액 = 사용시간 * 100
            //차량정보 빼주기
            주차정보목록[index] = "빈좌석";
            console.log(`출차 완료 : 위치 :${index+1}`);
            break;
        }
    }

    if(searchOk = false) {
        console.log("주차된 차량이 없습니다!");
    }
    // 3. [출력] 요금과 차량 위치를 출력해준다

}