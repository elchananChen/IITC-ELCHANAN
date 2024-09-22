"use strict";
const gToDoList = [
  {
    id: "jVcoPQC",
    status: false,
    task: "test",
  },
  {
    id: makeId(),
    status: false,
    task: "test2",
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

const elToDoList = document.querySelector(".to-do-list"); //ul
const elInputAdd = document.querySelector(".input-add"); //add input
const eladdBtn = document.querySelector(".add-btn"); //add button
const elInputUpdate = document.querySelector(".input-update"); // update input
const elapdateBtn = document.querySelector(".apdate-btn"); // update button
const elOnlyCompletedBtn = document.querySelector(".onlyCompleteBtn");
const elOnlyUncompletedBtn = document.querySelector(".onlyUncompleteBtn");

function addClassToElementsByClassOnClick(elBtn, exisClass, toAddClass) {
  elBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    elBtn.classList.toggle("clickedBtn"); // לשנות את המיקום?
    const current = document.querySelectorAll(`.${exisClass}`);

    current.forEach((element) => {
      element.classList.toggle(toAddClass);
    });
  });
}

function complete(btn) {
  btn.addEventListener("click", function (ev) {
    ev.preventDefault();
    btn.classList.toggle("clickedBtn");
    const elLiAll = document.querySelectorAll("li");
    const elLiAllArr = Array.from(elLiAll);
    elLiAllArr.forEach((el) => {
      if (!el.classList.contains("complete")) {
        el.classList.toggle("displayNone");
      }
    });
  });
}
complete(elOnlyCompletedBtn);

function loadListInSpecificKey(arr, ul, key, keyId) {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("id", `a${arr[i][keyId]}`);
    li.innerHTML = arr[i][key];
    li.setAttribute("class", "wrapper");

    createCompleteBtn(li);

    createDeleteBtnForElement(li);
    // li.appendChild(deleteBtn);
    ul.appendChild(li);
  }
}

function deleteFromDatabaseByID(arr, elId) {
  for (let i = 0; i < arr.length; i++) {
    if (elId === `a${arr[i].id}`) {
      arr.splice(i, i + 1);
    }
  }
}

function createDeleteBtnForElement(toDelete) {
  const button = document.createElement("button");
  button.setAttribute("class", "deleteBtn");

  button.textContent = "delete";
  toDelete.appendChild(button);

  button.addEventListener("click", function (ev) {
    ev.preventDefault();
    deleteFromDatabaseByID(gToDoList, toDelete.id);
    toDelete.remove();
    2;
    // console.log(gToDoList);
  });
  return button;
}

function createCompleteBtn(perent) {
  const btn = document.createElement("button");
  // btn.setAttribute("class", "complete");
  btn.setAttribute("class", "completeBtn completeBtnClicked");

  btn.textContent = "✔";

  perent.appendChild(btn);
  btn.addEventListener("click", function () {
    perent.classList.toggle("complete");
    // perent.classList.toggle("displayComplete");
    btn.classList.toggle("completeBtnClicked");
  });

  return btn;
}

loadListInSpecificKey(gToDoList, elToDoList, "task", "id");

function getKeyFromLastObjectfromArrObjectsAsLi(arr, key) {
  const li = document.createElement("li");

  li.innerHTML = arr[arr.length - 1][key];

  return li;
}

function getKeyFromLastObjectfromArrObjectsAsString(arr, key) {
  const keyValue = arr[arr.length - 1][key];

  return keyValue;
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
    ev.preventDefault();

    updateDataBase(arr);
    const li = getKeyFromLastObjectfromArrObjectsAsLi(gToDoList, "task");
    const id = getKeyFromLastObjectfromArrObjectsAsString(gToDoList, "id");
    li.setAttribute("id", `a${id}`);
    li.setAttribute("class", "wrapper");
    createCompleteBtn(li);
    createDeleteBtnForElement(li);
    list.appendChild(li); //order is critical
    elInputAdd.value = "";
    console.log(gToDoList);
  });
}

addInputToListAndUpdateDataBaseOnClick(gToDoList, elToDoList);
addClassToElementsByClassOnClick(
  elOnlyUncompletedBtn,
  "complete",
  "displayNone"
);
