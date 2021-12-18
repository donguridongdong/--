const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const TODOS = "todos";
let toDos = [];//const로 toDos를 정의해버리면, 새로고침할때마다 빈 array가 되므로.

function saveTodo() {
// JSON.stringify는 localstorage에서 todo값 하나하나를 각각 분리된 text로 만들어준다.
// JSON 안쓰면 localstorage엔 "적었던 모든값"으로 아예 1개의 text로 인식.
// JSON.stringify()는 object나, array의 모든 값들을 string으로 바꿔줌.
// 반대로, JSON.parse("")는 텍스트화 된 값들을 다시 object나 array형식에 맞게 변환
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id));
    saveTodo();
}

function paintTodo(todoValue) {
    const li = document.createElement("li");
    li.id = todoValue.id;
    const span = document.createElement("span");
    span.innerText = todoValue.text;
    const button = document.createElement("button");
    button.innerText = "✔";
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    button.addEventListener("click", deleteTodo);
}

function addTodo(event) {
    event.preventDefault();
    const todoValue = todoInput.value;
    // ★여기서 todoValue(변수)는 투두를 제출한 값으로 복사가 되서 밑에
    // todoInput.value = "";로 해도 todoValue변수에는 영향이 없다.
    todoInput.value = ""; // 이것은 todo를 submit한 후 밸류값을 깨끗하게 하기위해.
    const todoObject = {
        text:todoValue,
        id:Date.now(),
    };//object 한 이유는 li마다 인식할 id를 넣기위해.
    toDos.push(todoObject);
    paintTodo(todoObject);
    saveTodo();
}

todoForm.addEventListener("submit", addTodo);

const getTodos = localStorage.getItem(TODOS);
if (getTodos !== null) {
    const parseTodo = JSON.parse(getTodos);
    toDos = parseTodo;//toDos를 let으로 정의해서 새로고침해도 저장소가 안날아가게
    parseTodo.forEach(paintTodo);//forEach는 array의 item 하나하나에 function을 적용시키게함.
}
