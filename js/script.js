const input = document.getElementById("input");
const addBtn = document.getElementById("add__btn");
const list = document.getElementById("list");

const items = document.querySelectorAll(".items");
const noOfTasks = document.querySelector(".task-num");

// =================================================================
let itemNum = 0;
noOfTasks.innerText = 0;
// =================================================================

const addItem = function () {
  const inputText = input.value;

  if (inputText.trim().length > 0) {
    const item = `
    <li class="home__item item">
        <div class="home__item__text">
            <input type="checkbox" id="checkbox-${itemNum}"
                class="home__item__text__checkbox" />
            <span class="home__item__text__checkbox__span"></span>
            <label for="checkbox-${itemNum}" class="home__item__text__task"> 
                ${inputText}
            </label>
        </div>
        <div class="home__item__icons">
            <span class="material-icons home__item__icons__delete delete__btn">
                clear
            </span>
            </div>
    </li>  `;

    itemNum++;
    noOfTasks.innerText++;

    list.insertAdjacentHTML("beforeend", item);

    input.value = "";
    input.focus();
  }
};

// =================================================================

addBtn.addEventListener("click", addItem);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});

// =================================================================
// =================================================================
list.addEventListener("click", function (e) {
  let closestLi = e.target.closest(".item");

  if (e.target.classList.contains("delete__btn")) {
    closestLi.parentNode.removeChild(closestLi);
    noOfTasks.innerText--;
  }
});
