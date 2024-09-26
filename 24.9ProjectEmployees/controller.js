import { utils } from "./utile.js";
import { emploeesService } from "./employees.service.js";

function renderAll(arr) {
  let elTable = document.querySelector(".table");
  elTable.innerHTML = `<tr class="tr-th">
  <th class="th">first name</th>
  <th class="th">last name</th>
  <th class="th">age</th>
  <th class="th">start date</th>
  <th class="th">department</th>
  <th class="th">salary</th>
</tr>
`;
  arr.forEach((currentEmployee) => {
    elTable.innerHTML += `<tr>
              <td>${currentEmployee.firstName}</td>
              <td>${currentEmployee.lastName}</td>
              <td>${currentEmployee.age}</td>
              <td>${currentEmployee.startDate}</td>
              <td>${currentEmployee.department}</td>
              <td>${currentEmployee.salary}</td>
              <td> <button id="${currentEmployee.id}" class="choose-btn">👈</button> </td>
            </tr>`;
  });
}

renderAll(emploeesService.gEmploees);

// HIDDEN "ADD NEW EMPLOYEE FORM" TOGGLE
const addEmoji = document.querySelector(".add-emoji");
const addForm = document.querySelector(".add-form");
utils.toggelFormByClass(addEmoji, addForm, "hidden");

// HIDDEN "UPDATE EMPLOYEE FORM" TOGGLE

const updateImoji = document.querySelector(".update-emoji");
const updateForm = document.querySelector(".update-form");
utils.toggelFormByClass(updateImoji, updateForm, "hidden");

function onlyOpen(toOpen, toHidde) {
  toOpen.addEventListener("click", () => {
    toHidde.classList.add("hidden");
  });
}
// ONLY ONE INPUT OPEN AT A TIME

onlyOpen(updateImoji, addForm);
onlyOpen(addEmoji, updateForm);

// ADD CLASSES  WHEN CHOOSE BTN CLICKED

const chooseBtns = document.querySelectorAll(".choose-btn");
const fireBtn = document.querySelector(".fire-btn");

function btnToAddClassChoose(element, clas) {
  chooseBtns.forEach((chooseBtn) => {
    if (typeof clas === "string") {
      chooseBtn.addEventListener("click", (ev) => {
        element.classList.toggle(clas);
        console.log(element);
      });
    } else {
      console.log("typeof clas in btnToAddClassChoose have to be string");
    }
  });
}

btnToAddClassChoose(fireBtn, "toFireChoosen");
btnToAddClassChoose(updateImoji, "toUpdetChoosen");

function btnToAddClassChooseToNearestTr(btn) {
  btn.addEventListener("click", (ev) => {
    const row = ev.target.closest("tr");
    console.log(row);
    if (row) {
      row.classList.toggle("choosenOne");
    }
  });
}

// btnToAddClassChooseToNearestTr(chooseBtn);
// contains("chosenOne")

export const controller = {
  renderAll,
};
