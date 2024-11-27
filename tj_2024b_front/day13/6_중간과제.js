let dateList = []
let contentList = []
let moneyList = []

function start() {
    // 1. 입력/저장
    let dateInput = document.querySelector('.dateInput') 
    let date = dateInput.value;             
    let contentInput = document.querySelector('.contentInput')
    let content = contentInput.value;
    let moneyInput = document.querySelector('.moneyInput')
    let money = moneyInput.value;

    // 2. 처리 - 입력받은 값들을 각 배열에 저장
    dateList.push(date); 
    contentList.push(content);
    moneyList.push(money); 

    // 3. 출력

    /*
    let input1= document.querySelector('.dateInput')    
    let input2= document.querySelector('.productInput')    
    let input3= document.querySelector('.moneyInput')    
    let date = input1.value;
    let prodc = input2.value;
    let money = input3.value;
    dateList.push(date);
    productList.push(prodc);
    moneyList.push(money);
    */
    finish();
}

function finish() {    
    // 1. 어디에 - 테이블에 <table>
    let table = document.querySelector('table')
    // 2. 무엇을
    let html = '' // 출력할 HTML 구성 변수
    //2-1 배열순회
    for(let index = 0; index <= dateList.length - 1; index++) {
        html += `<tr> 
        <td> ${dateList[index]} </td> 
        <td> ${contentList[index]} </td>
        <td> ${moneyList[index]} </td>
        </tr>`
    }
    // 3. 출력
    table.innerHTML = html

}