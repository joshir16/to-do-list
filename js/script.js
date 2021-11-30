const inputText = document.querySelector(".input__item");
const addBtn = document.querySelector(".add__btn");

// .............................................................
const list = document.querySelector(".list");

// .............................................................
const allitems = document.querySelectorAll(".item");

// .............................................................
const deleteBtn = document.querySelector(".delete__item");

// ========================================================
// ========================================================
const addItem = function () {
  const itemText = inputText.value;

  if (itemText.trim().length > 0) {
    const item = `
    <li class="home__box__item item">
      ${itemText}
        <span class="material-icons delete__item"> clear </span>
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
// delete li -----------------------------------------------
list.addEventListener("click", function (e) {
  let closestLi = e.target.closest(".item");

  if (e.target.classList.contains("delete__item")) {
    closestLi.parentNode.removeChild(closestLi);
  }
});
