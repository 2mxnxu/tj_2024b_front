/*

*/
/*
let fruit_box = ['사과','포도','딸기'];
let index

for(index = 0; index <= fruit_box.length -1; index++) {
    console.log(fruit_box[index])
}
*/


/*
let int1 = prompt('점수1 :')
score_list.push(int1);
let int2 = prompt('점수2 :')
score_list.push(int2);
let int3 = prompt('점수3 :')
score_list.push(int3);

console.log()
*/
let score_list = []

for(let i = 1; i<=3; i++) {
    let int1 = prompt(`int${i} :`)
    score_list.push(int1);
}
/*
let outHTML = `<ol>
    <li><a>${score_list[0]}</a></li>
    <li><a>${score_list[1]}</a></li>
    <li><a>${score_list[2]}</a></li>
</ol>`
document.write(outHTML)
*/
let outHTML = `<ol>`
for(let index = 0; index <= score_list.length -1; index++) {
    outHTML = `<li> ${score_list[index]} </li>`
}
outHTML = `<ol>`
document.write(outHTML)
