/*
1. (회원가입 구역 에서 ) 아이디 와 비밀번호를 입력받아 회원가입 처리 해주세요.
2. (로그인 구역 에서 ) 아이디 와 비밀번호가 회원가입에 등록된 데이터정보와 일치하면 '로그인 성공' 아니면 '로그인실패' 출력해주세요.
*/
let inputArray = []
let loginArray = []

function join () {
    let id = document.querySelector('.id').value;  
    let password = document.querySelector('.password').value;   
    inputArray.push( `['${id}' , '${password}']` )
    console.log( inputArray )
}

function login () {
    let loginId = document.querySelector('.loginId').value;  
    let loginPassword = document.querySelector('.loginPassword').value;   
    loginArray.push( `['${loginId}' , '${loginPassword}']` )
    console.log( loginArray )
    let searchOK = false;
        for(i = 0; i <= inputArray.length-1; i++) { 
            
            if(loginArray[0] == inputArray[i]) {
                //document.write("로그인 성공")
                //break;
                searchOK = true;
                document.write("로그인 성공")
                break;
            }
            

       }
       if(searchOK == false) { 
        document.write("로그인 실패")
    }
}