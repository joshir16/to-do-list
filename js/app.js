const input = document.getElementById("input");
const addBtn = document.getElementById("add__btn");
const list = document.getElementById("list");

const items = document.querySelectorAll(".items");
const noOfTasks = document.querySelector(".task-num");

// =================================================================
const todoArray = [];
// =================================================================

const addItem = function (inputText, id) {
  const item = `
        <li class="home__item item" data-id="${id}">
            <p class="home__item__task task">${inputText}</p>

            <span class="material-icons home__item__delete delete__btn">
              clear
            </span>
          </li>
        `;

  list.insertAdjacentHTML("beforeend", item);

  input.value = "";
  input.focus();
};

// =================================================================

const createLocalStorage = function () {
  const inputText = input.value;

  if (inputText.trim().length > 0) {
    todoArray.push(inputText);
    localStorage.setItem("Todo", JSON.stringify(todoArray));

    let l = todoArray.length - 1;

    addItem(inputText, l);
  }
};

const checkLocalStorage = function () {
  const data = JSON.parse(localStorage.getItem("Todo"));

  if (!data) return;

  todoArray.push(...data);
  if (data) {
    data.forEach((el, id) => {
      addItem(el, id);
    });
  }
};

// =================================================================

// =================================================================

addBtn.addEventListener("click", createLocalStorage);

document.addEventListener("DOMContentLoaded", checkLocalStorage);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    // addItem();
    createLocalStorage();
  }
});

// =================================================================
list.addEventListener("click", function (e) {
  let closestItem = e.target.closest(".item");

  let closestTask = closestItem.children[0].innerText;

  let index = todoArray.indexOf(`${closestTask}`);

  if (e.target.classList.contains("delete__btn")) {
    closestItem.parentNode.removeChild(closestItem);
  }

  todoArray.splice(index, 1);
  localStorage.setItem("Todo", JSON.stringify(todoArray));
});
