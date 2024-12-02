let infoArray = []
let scoreArray = []

function info() {
    let name = document.querySelector('.name').value;
    let birth = document.querySelector('.birth').value;
    let num1 = document.querySelector('.num1').value;
    let board = `${name},${birth},${num1}`;
    infoArray.push(board);
    console.log(infoArray);
    infoOutput();
}
function infoOutput() {
    let tbody = document.querySelector('.infoOutput > tbody');
    let html = ``;
    for (let i = 0; i <= infoArray.length -1 ; i++) {
        let board = infoArray[i];
        let info = board.split(',');
        html += `<tr> <td>${info[0]}</td> 
                <td>${info[1]}</td> 
                <td>${info[2]}</td> </tr>` ;
    }
    tbody.innerHTML = html;
}

function score() {
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
    let high = document.querySelector('.high').value;
    let low = document.querySelector('.low').value;
    let year = document.querySelector('.year').value;
    
    let board = `${num2},${high},${low},${year}`;

    if (num1 == num2) {
         scoreArray.push(board);
         console.log(scoreArray);
    }

    scoreOutput();
}

function scoreOutput() {

    let tbody = document.querySelector('.scoreOutput > tbody');
    let html = '';
    for (let j = 0; j < scoreArray.length; j++) {
        let board = scoreArray[j];
        let score = board.split(',');
        html += `<tr> <th>${score[0]}</th> 
                <th>${score[1]}</th> 
                <th>${score[2]}</th>
                <th>${score[3]}</th> </tr>` 
    }
    tbody.innerHTML = html;
}