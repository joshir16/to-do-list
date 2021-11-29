const inputText = document.querySelector(".input__item");
const addBtn = document.querySelector(".add__btn");
const list = document.querySelector(".list");

addBtn.addEventListener("click", function () {
  const itemText = inputText.value;

  if (itemText.length > 0) {
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

  inputText.value = "";
  inputText.focus();
});

inputText.focus();
