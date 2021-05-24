import { combineReducers, createStore } from "redux"; // data 를 넣는 곳

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
    return { type: ADD_TODO, text };
};
const deleteToDo = (id) => {
    return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            const newToDoObj = { text: action.text, id: Date.now() };
            return [newToDoObj, ...state];
        case DELETE_TODO:
            // 지우기 버튼을 통해 선택한 버튼의 id 와 다른 id를 가진 버튼만 남기겠다.
            // filter >> 해당 조건문 true를 만족하는 요소를 가진 새로운 array 리턴
            const cleaned = state.filter((toDo) => toDo.id !== action.id);
            return cleaned;
        default:
            return state;
    }
};

const store = createStore(reducer);

const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach((toDo) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");

        btn.innerText = "DEL";
        btn.addEventListener("click", dispatchDeleteTodo);

        li.id = toDo.id;
        li.innerText = toDo.text;

        li.appendChild(btn);
        ul.appendChild(li);
    });
};

store.subscribe(paintToDos);

const dispatchAddToDo = (text) => {
    store.dispatch(addToDo(text));
};

const dispatchDeleteTodo = (e) => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id));
};

// to do 리스트 요소 만들기
const createToDo = (toDo) => {
    // li 리스트 요소 만들기
    const li = document.createElement("li");
    // li 리스트에 텍스트(할일) 대입
    li.innerText = toDo;
    // 해당 요소는 ul에 자식으로 집어넣는다.
    ul.appendChild(li);
};

// 할일 제출
const onSubmit = (e) => {
    e.preventDefault();
    // 할일 텍스트
    const toDo = input.value;
    // 제출 후 빈 값으로 초기화
    input.value = "";
    // 제출한 할일 텍스트로 리스트 생성ㅎ아기
    dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
