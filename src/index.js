import { createStore } from "redux"; // data 를 넣는 곳

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// modify data 앱의 상태를 변경하여 수정하는 것
const reducer = (state = 0, action) => {
    return state;
};

// 변경된 앱의 state 가 저장되는 곳.
const store = createStore(reducer);

console.log(store.getState());

let count = 0;

const updateText = () => {
    number.innerText = count;
};

const handleAdd = () => {
    count = count + 1;
    updateText();
};

const handleMinus = () => {
    count = count - 1;
    updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
