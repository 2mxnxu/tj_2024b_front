let loginList = [
    {id : 'aaa', pw : '111'}
]
let no = 2;
let num = null;

let joinList = [
    {no :1, name : 'aaa', id : 'aaa', pw : '111'}
]
let servList = [
    {id : 'aaa', person : '4', serType : 'basic', storage : '4tb', during : '4개월', 
        comName : '삼성전자', callNum : '01012345678', email : '1234@naver.com', 
        address : '인천광역시 ㅇㅇ구 ㅇㅇ동'
    }
]

function join() {
    let joinName = document.querySelector('.joinName').value;
    let joinId = document.querySelector('.joinId').value;
    let joinPw = document.querySelector('.joinPw').value;

    if (joinName === "" || joinId === "" || joinPw === "") {
        alert("정보를 모두 입력해주세요!");
        return;
      }

    let join = {
        no : no,
        name : joinName, 
        id : joinId,
        pw : joinPw
    }
    no++
    joinList.push(join)
    console.log(joinList);
    document.querySelector('.joinName').value = ``;
    document.querySelector('.joinId').value = ``;
    document.querySelector('.joinPw').value = ``;
    return;   
}

function login() {
    let loginId = document.querySelector('.loginId').value;  
    let loginPw = document.querySelector('.loginPw').value; 
    let text = document.querySelector('.text');
    let html = ``

    if (loginId === "" || loginPw === "") {
        alert("정보를 모두 입력해주세요!");
        return;
      }

    let login = {
        id : loginId,
        pw : loginPw
    }
    loginList.push(login)
    console.log(login);
    document.querySelector('.loginId').value = ``;
    document.querySelector('.loginPw').value = ``;

    let searchOK = false;

        for(i = 0; i <= joinList.length-1; i++) { 
            
            if(login.id === joinList[i].id && login.pw === joinList[i].pw) {
                num = joinList[i].no;
                searchOK = true;
                html += `<a>${joinList[i].no}번째 회원님 로그인 성공</a>`
                 text.innerHTML = html;
                 
                break;
            }
            

       }
       if(searchOK == false) { 
        alert("로그인 실패")
    }
    servList = [];
    serInfoPrint();
}
   
function serInfo() {  
    let person = document.querySelector('.person').value;
    let serTypeElement = document.querySelector('input[name="gener"]:checked');
    let storage = document.querySelector('.storage').value;
    let during = document.querySelector('.during').value;
    let comName = document.querySelector('.comName').value;
    let callNum = document.querySelector('.callNum').value;
    let email = document.querySelector('.email').value;
    let address = document.querySelector('.adress').value;

    if (person === "" || !serTypeElement || storage === "" || during === "") {
        alert("필수정보를 모두 입력해주세요!");
        return;
      }

      let serType = serTypeElement.value;

    let info = {
        no : num,
        person : person,
        serType : serType,
        storage : storage,
        during : during,
        comName : comName,
        callNum : callNum,
        email : email,
        address : address
    }

    servList.push(info)
    console.log(servList)
    document.querySelector('.person').value = ``;
    document.querySelector('.serType').checked = false;
    document.querySelector('.storage').value = ``;
    document.querySelector('.during').value = ``;
    document.querySelector('.comName').value = ``;
    document.querySelector('.callNum').value = ``;
    document.querySelector('.email').value = ``;
    document.querySelector('.adress').value = ``;

    serInfoPrint(); 


}

function serInfoPrint() {
    let newInfo = document.querySelector('.serInfoPrint')
    let servHtml = ``

    if (servList.length > 0) {

    let service = servList[servList.length - 1];

    if (service.serType === 'Basic') {
        servHtml = `<table border="1">
            <th>Basic</th>
            <tr><td>인원 : 1명</td></tr>
            <tr><td>용량 : 1TB</td></tr>
            <tr><td>구독기간 : 1개월</td></tr>
            <tr><td>가격 : 4900원</td></tr>
        </table> 
        <button>가입하기</button>`;
    } 
    else if (service.serType === 'Standard') {
        servHtml = `<table border="1">
            <th>Standard</th>
            <tr><td>인원 : 4명</td></tr>
            <tr><td>용량 : 4TB</td></tr>
            <tr><td>구독기간 : 3개월</td></tr>
            <tr><td>가격 : 6900원</td></tr>
        </table> 
        <button>가입하기</button>`;
    } 
    else if (service.serType === 'Premium') {
        servHtml = `<table border="1">
            <th>Premium</th>
            <tr><td>인원 : 8명</td></tr>
            <tr><td>용량 : 8TB</td></tr>
            <tr><td>구독기간 : 6개월</td></tr>
            <tr><td>가격 : 9900원</td></tr>
        </table> 
        <button>가입하기</button>`;
    }
    }else {
        servHtml = `<p>서비스 정보가 없습니다. 서비스를 선택해주세요.</p>`;
    }
    
    

newInfo.innerHTML = servHtml;
}