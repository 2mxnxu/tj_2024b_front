let todolist = [
    {no :1, content : "밥먹기", bool : false},
    {no :2, content : "밥먹기", bool : true}
]

let no = 3;

function add() {
    let content = document.querySelector('.contentInput').value;

    let todo = {
        no : no,
        content : content,
        bool : false
    }
    no++
    todolist.push(todo)
    print()
    document.querySelector('.contentInput').value = ``;
    return;
}
print()
function print() {
    let todoBottom = document.querySelector('.todoBottom')

    let html = ``;
    

    for(let i = 0; i<=todolist.length-1; i++) {
        let info = todolist[i] 
        html += `<div class="contentBox ${info.bool == true ? 'success' : ''}">
                <div class="content">${info.content}</div>
                <div class="contentBtn">
                    <button onclick= "update(${info.no})" class="updateBtn">수정</button>
                    <button onclick= "drop(${info.no})" class="deleteBtn">삭제</button></div>
            </div>`
    }
    todoBottom.innerHTML = html;
    return;
}

function update(update){
    for(let i = 0; i<=todolist.length-1; i++) {
        if(todolist[i].no == update) {
            todolist[i].bool = !todolist[i].bool;
            break;
        }
    }
    print()
    return;
}

function drop(drop){
    for(let i = 0; i<=todolist.length-1; i++) {
        if(todolist[i].no == drop) {
            todolist.splice(i,1);
           break; 
        }
    }
    print()
    return;
}