/*
    - 학생들의 점수 출력하는 구현
        1. 학생이름배열 
            let nameArray = ['유재석','강호동','신동엽']
        2. 학생점수배열
            let scores = [92, 86, 72]
        3. 아래와 같이 출력, 100점 만점이라고 했을때 점수를 ● 표기 나머지 점수 ○
        이름    점수    시각화
        유재석  
        강호동
        신동엽  
*/
let nameArray = ['유재석','강호동','신동엽']
let scores = [92, 86, 72]
let outHTML = `<div> <span>이름</span></div>`

for(let index = 0; index <=nameArray.length -1; index++) {
    //console.log(nameArray[index]);

    outHTML += `<div> <span>${nameArray[index]}</span>`
    let pointHTML = ``
     
    for(let point = 1; point <=100; point ++) {
        if(point <= scores[index])
        pointHTML += `●`
            else {
                pointHTML += `○`
        }
    }
    /*
    for(let point = 1; point <=scores[index]; point++) {
        pointHTML += `●`
    }
    for(let point = 1; point <= 100 - scores[index]; point++) {
        pointHTML += `○`
    }
        */
    outHTML += `<span>${pointHTML}</span></div>`
}
document.write(outHTML)
