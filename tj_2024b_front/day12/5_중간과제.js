/*
    배열순회 - for(let index = 0; index <=배열명.length -1; index++) {
        배열명[index];
    }
*/ 
/*
let movieNames = ['히든페이스','위키드','글래디에이터2','청설'];
let movieRating = [8,4,7,6]
let out = '';
//let star1;
//let star2;

for(let i = 0; i <= 10; i++) { 
    for(let j = 0; j <= 10; j++) { 
        star1 =  '★' * movieRating[0]
    }
    let st = 10 - movieRating[0]
        star2 = '☆' *st
}
        document.write(movieNames[0])
document.write(star1 + star2)
        */
/*
let outHTML = `<ol>`
for(let index = 0; index <= movieRating.length -1; index++) {
    outHTML = `<li> ${movieRating_list[index]} </li>`
}
outHTML = `<ol>`
document.write(outHTML)
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

/*
if(movieRating[0] < 1) {
    document.write(movieNames[0])
    document.write('☆☆☆☆☆☆☆☆☆☆')
}
else if(movieRating[0] < 2) {
    document.write(movieNames[0])
    document.write('★☆☆☆☆☆☆☆☆☆')
}
else if(movieRating[0] < 3) {
    document.write(movieNames[0])
    document.write('★★☆☆☆☆☆☆☆☆')
}
else if(movieRating[0] < 4) {
    document.write(movieNames[0])
    document.write('★★★☆☆☆☆☆☆☆')
}
else if(movieRating[0] < 5) {
    document.write(movieNames[0])
    document.write('★★★★☆☆☆☆☆☆')
}
else if(movieRating[0] < 6) {
    document.write(movieNames[0])
    document.write('★★★★★☆☆☆☆☆')
}
else if(movieRating[0] < 7) {
    document.write(movieNames[0])
    document.write('★★★★★★☆☆☆☆')
}else if(movieRating[0] < 8) {
    document.write(movieNames[0])
    document.write('★★★★★★★☆☆☆')
}else if(movieRating[0] < 9) {
    document.write(movieNames[0])
    document.write('★★★★★★★★☆☆')
}
else if(movieRating[0] < 10) {
    document.write(movieNames[0])
    document.write('★★★★★★★★★☆')
}
else {
    document.write(movieNames[0])
    document.write('★★★★★★★★★★')
}
    */