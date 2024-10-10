// task-1

let Content = document.getElementById("content");
Content.style.backgroundColor = "lightblue";
let text = document.querySelectorAll(".text");
for (let i = 0; i < text.length; i++) {
  text[i].style.color = "red";
}

let elUl = document.querySelector("ul");
let items = document.querySelectorAll("li");
for (let i = 0; i < items.length; i++) {
  //   console.log(items[i].textContent);
}

let elButton = document.querySelector("button");

elButton.addEventListener("click", function () {
  elUl.style.backgroundColor = "yellow";
});

// task-2

let toAddLi = document.querySelector(".input-list");
// console.log(toAddLi);

let buttonAddItem = document.querySelector(".add-item");
function addItemByClick() {
  let newLi = document.createElement("li");
  newLi.textContent = "New Item";
  console.log(newLi);
  toAddLi.appendChild(newLi);
}

buttonAddItem.addEventListener("click", addItemByClick);

let selected = document.querySelectorAll(".selected");
const selectedArry = Array.from(selected);
selected;

function addPointer(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("mouseover", () => {
      arr[i].style.cursor = "pointer";
    });
  }
}

addPointer(selectedArry);

function boldOnClick(value) {
  for (let i = 0; i < value.length; i++) {
    value[i].addEventListener("click", () => {
      value[i].style.fontWeight = "bold";
    });
  }
}

boldOnClick(selectedArry);

function removeLastChild() {
  const list = document.getElementById("list");
  list.removeChild(list.lastElementChild);
}

function removefirstChild() {
  let list = document.getElementById("list");
  list.removeChild(list.firstElementChild);
}

const removeFirstItem = document.querySelector(".remove-first-item");
removeFirstItem.addEventListener("click", function () {
  removefirstChild();
});

const removeLastItem = document.querySelector(".remove-last-item");
removeLastItem.addEventListener("click", function () {
  removeLastChild();
});

// console.log(list);

// let list = document.querySelectorAll("#list li");
// const listArr = Array.from(list);
// console.log(listArr[0]);
// console.log(list);
