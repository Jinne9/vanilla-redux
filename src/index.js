import { combineReducers, createStore } from "redux"; // data 를 넣는 곳

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

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
    createToDo(toDo);
};

form.addEventListener("submit", onSubmit);
