const input = document.getElementById("input");
const addBtn = document.getElementById("add__btn");
const list = document.getElementById("list");

const items = document.querySelectorAll(".items");
const noOfTasks = document.querySelector(".task-num");

// =================================================================
const todoArray = [];

// =================================================================
// add html
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
// create local storage
const createLocalStorage = function () {
  // get input value
  const inputText = input.value;

  //   check balid input
  if (inputText.trim().length > 0) {
    //   push to array
    todoArray.push(inputText);

    // save to local storage
    localStorage.setItem("Todo", JSON.stringify(todoArray));

    let l = todoArray.length - 1;

    // create html
    addItem(inputText, l);
  }
};

// check local storage---------------
const checkLocalStorage = function () {
  // get local storage
  const data = JSON.parse(localStorage.getItem("Todo"));

  //   check if local storage has any data
  if (!data) return;

  //   move data to todo array
  todoArray.push(...data);
  if (data) {
    data.forEach((el, id) => {
      // create html for every element
      addItem(el, id);
    });
  }
};

// =================================================================

// event handlers
addBtn.addEventListener("click", createLocalStorage);

document.addEventListener("DOMContentLoaded", checkLocalStorage);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    // addItem();
    createLocalStorage();
  }
});

// =================================================================
// delete on event
list.addEventListener("click", function (e) {
  // get closest Li to delete
  let closestItem = e.target.closest(".item");

  // get children of Li at index 1
  let closestTask = closestItem.children[0].innerText;

  //   check index of that text in array
  let index = todoArray.indexOf(`${closestTask}`);

  // if Lis has element delete than delete that Li
  if (e.target.classList.contains("delete__btn")) {
    closestItem.parentNode.removeChild(closestItem);
  }

  //   remove from local Storage array
  todoArray.splice(index, 1);

  //   save again to local storage
  localStorage.setItem("Todo", JSON.stringify(todoArray));
});
