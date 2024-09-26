import { utils } from "./utile.js";
import { controller } from "./controller.js";

const EMPLOEES_STORAGE_KEY = "emploees";

let gEmploees = utils.getFromStorage(EMPLOEES_STORAGE_KEY) || [];

const elNewBtn = document.querySelector("#new-btn");
const elForm = document.querySelector("#employee-form");
const elFirstName = document.querySelector("#first-name");
const elLastName = document.querySelector("#last-name");
const elAge = document.querySelector("#age");
const elStartDate = document.querySelector("#start-date");
const elDepartment = document.querySelector("#department");
const elSalary = document.querySelector("#salary");

function newAmployee() {
  elForm.addEventListener("submit", (ev) => {
    ev.preventDefault();

    gEmploees.push({
      id: utils.makeId(),
      firstName: elFirstName.value,
      lastName: elLastName.value,
      age: elAge.value,
      startDate: elStartDate.value,
      department: elDepartment.value,
      salary: elSalary.value,
    });

    controller.renderAll(gEmploees);
    utils.saveToStorage(EMPLOEES_STORAGE_KEY, gEmploees);
    elFirstName.value = "";
    elLastName.value = "";
    elAge.value = "";
    elStartDate.value = "";
    elDepartment.value = "";
    elSalary.value = "";
  });
}

newAmployee();

export const emploeesService = {
  gEmploees,
  newAmployee,
};
