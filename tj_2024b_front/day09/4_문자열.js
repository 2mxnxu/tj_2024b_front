let 직원명1 = '유재석'
let 직원명2 = '강호동'
let nameHTML = `<ol> <li> ${직원명1} </li> <li>${직원명2}</li> </ol>`
document.write(nameHTML) 

//입력받은 데이터를 HTML로 출력
/*
let 결과 = prompt('[알람내용] 데이터를 입력해주세요')
console.log(결과)
let inputHTML = `<h3> 입력받은 데이터 : ${결과} </h3>`
document.write(inputHTML)
*/
// 예 : 2명의 사원이름을 입력받아서 HTML(table)형식으로 출력하시오.
let 결과1 = prompt('이름을 입력해주세요')
let 결과2 = prompt('이름을 입력해주세요')
console.log(결과1, 결과2)
let inputHTML = `<table> <tr> <th>번호</th> <th>이름</th> </tr> 
<tr> <td>1</td> <td> ${결과1} </td> </tr> 
<tr> <td>2</td> <td> ${결과2} </td> </tr> </table>`
document.write(inputHTML)