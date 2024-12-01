/*
    배열순회 - for(let index = 0; index <=배열명.length -1; index++) {
        배열명[index];
    }
*/ 

let movieNames = ['히든페이스','위키드','글래디에이터2','청설']
let movieRating = [8,4,7,6]
let outHTML = `<div> <span></span></div>`

for(let index = 0; index <=movieNames.length -1; index++) {
    outHTML += `<div> <span>${movieNames[index]}</span>`
    let scoreHTML = ``

    for (let score = 0; score <=10; score++) {
        if(score <= movieRating[index])
        scoreHTML += `★`
            else {
                scoreHTML += `☆`
        }
     }
     outHTML += `<span>${scoreHTML}</span></div>`
}
document.write(outHTML)

// 0 빈좌석 , 1 예약석
let seat = [0, 1, 
            0, 0, 
            1, 0];

let 빈좌석 = '<span style="color: blue">빈좌석</span>'
let 예약석 = '<span style="color: red">예약석</span>'

    for(let i = 0; i <3; i++) {
        for(let j = 0; j <2; j++) {
            let index = i * 2 + j;
            if(seat[index] == 0) {
                document.write(빈좌석 + " ");
        }
        else if (seat[index] == 1){
            document.write(예약석 + " ");
        }
    }
    document.write("<br>");
    }

