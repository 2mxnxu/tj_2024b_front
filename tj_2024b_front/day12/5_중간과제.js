let movieNames = ['히든페이스','위키드','글래디에이터2','청설'];
let movieRating = [8,4,7,6]
let out = '';
//let star1;
//let star2;

/*for(let i = 0; i <= 10; i++) { 
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
let starn = 10-movieRating[0];

for(let i = 0; i<= movieRating[0]; i++) {
    if(i>0) {
         out += '★'
    }
    else {
    out += '☆'
}
}
document.write(out)
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