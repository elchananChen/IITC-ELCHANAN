"use strict";
const gToDoList = [
  {
    id: makeId(),
    status: false,
    task: "test",
  },
];

function makeId() {
  let id = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 7; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
}

const elToDoList = document.querySelector(".to-do-list");
const elInputAdd = document.querySelector(".input-add");
const elInputUpdate = document.querySelector(".input-update");
const elapdateBtn = document.querySelector(".apdate-btn");
const eladdBtn = document.querySelector(".add-btn");

function loadTheListInSpecificKey(arr, list, key, keyId) {
  for (let i = 0; i < arr.length; i++) {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");

    const li = document.createElement("li");
    li.setAttribute("id", `a${arr[arr.length - 1][keyId]}`);
    li.innerHTML = arr[arr.length - 1][key];
    wrapper.appendChild(li);

    list.appendChild(wrapper);
    console.log(wrapper);
    console.log(list);

    addDeleteButtonToLi();
    wrapper.appendChild(button);
  }
}

function addDeleteButtonToLi() {
  const button = document.createElement("button");
  button.setAttribute("class", "deleteItemBtn");
  button.setAttribute("class", `e${makeId()}`);
  button.innerHTML = "delete";
  elToDoList.appendChild(button);
  button.addEventListener("click", function () {
    // elToDoList.removeChild()
  });
}

loadTheListInSpecificKey(gToDoList, elToDoList, "task", "id");

function getTaskKeyFromArrObjects(arr) {
  const li = document.createElement("li");

  li.innerHTML = arr[arr.length - 1].task;

  return li;
}

function updateDataBase(arr) {
  arr.push({
    id: makeId(),
    status: false,
    task: elInputAdd.value,
  });
}

function addInputToListAndUpdateDataBaseOnClick(arr, list) {
  eladdBtn.addEventListener("click", function (ev) {
    updateDataBase(arr);
    ev.preventDefault(); //order is critical
    list.appendChild(getTaskKeyFromArrObjects(gToDoList));
    elInputAdd.value = "";
    addDeleteButtonToLi();
    // console.log(gToDoList);
  });
}
addInputToListAndUpdateDataBaseOnClick(gToDoList, elToDoList);
function deleteLiFromListOnClick(params) {}
