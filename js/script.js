const inputText = document.querySelector(".input__item");
const addBtn = document.querySelector(".add__btn");
const list = document.querySelector(".list");

const allitems = document.querySelectorAll(".item");

// ========================================================
// ========================================================
const addItem = function () {
  const itemText = inputText.value;

  if (itemText.trim().length > 0) {
    const item = `
      <li class="home__box__item">
      ${itemText}
      <div class="home__box__item__icons">
      <span class="material-icons edit__item"> edit </span>
      <span class="material-icons done__item"> done </span>
      <span class="material-icons delete__item"> clear </span>
      </div>
      </li>`;

    list.insertAdjacentHTML("beforeend", item);
  }
};

addBtn.addEventListener("click", function () {
  addItem();
  inputText.value = "";
  inputText.focus();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addItem();
    inputText.value = "";
    inputText.focus();
  }
});

inputText.focus();

// ==========================================================
