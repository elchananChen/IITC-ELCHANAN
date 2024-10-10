import { utils } from "./utile.js";
import { controller } from "./controller.js";

const EMPLOEES_STORAGE_KEY = "emploees";
const FIRES_EMPLOYEES_STORAGE_KEY = "fires";
let gEmploees = utils.getFromStorage(EMPLOEES_STORAGE_KEY) || [];

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

// BUTTON TO DELETE  EMPLOYEE  FROM DATABASE AND SAVE HIM IN FIRES TABLE

const elFireBtn = document.querySelector(".fire-btn");

function fireChosenEmployee(elBtn, arr) {
  const fires = [];
  elBtn.addEventListener("click", () => {
    const elChosenOne = document.querySelector(".chosenOne");
    if (elChosenOne) {
      if (elBtn.classList.contains("toFireChosen")) {
        const elChildBtn = elChosenOne.querySelector(".choose-btn");
        arr.forEach((currentEmployee, i) => {
          if (currentEmployee.id === elChildBtn.id) {
            fires.push(currentEmployee);
            arr.splice(i, 1);
            utils.saveToStorage(FIRES_EMPLOYEES_STORAGE_KEY, fires);
            utils.saveToStorage(EMPLOEES_STORAGE_KEY, arr);
            const elUpdateForm = document.querySelector(".update-form");
            const elUpdateImoji = document.querySelector(".update-emoji");
            elBtn.classList.remove("toFireChosen");
            elUpdateImoji.classList.remove("toUpdateChosen");
            elUpdateForm.classList.add("hidden");
          }
        });
        controller.renderAll(gEmploees);
      }
    } else {
      console.log(
        "the update form should not be visible if chosenOne not exist!"
      );
    }
  });
}

fireChosenEmployee(elFireBtn, gEmploees);

const elUpdateBtn = document.querySelector("#update-btn");

function updateChosenEmployee(elBtn, arr) {
  elBtn.addEventListener("click", () => {
    const elUpdateAgeInput = document.querySelector("#update-age");
    const elUpdateDepartmentInput =
      document.querySelector("#update-department");
    const elUpdateSalaryInput = document.querySelector("#update-salary");
    const elChosenOne = document.querySelector(".chosenOne");
    const elFireBtn = document.querySelector(".fire-btn");
    const elUpdateImoji = document.querySelector(".update-emoji");
    if (
      (elChosenOne && elUpdateAgeInput.value !== "") ||
      elUpdateDepartmentInput.value !== "" ||
      elUpdateSalaryInput.value !== ""
    ) {
      if (elUpdateImoji.classList.contains("toUpdateChosen")) {
        const elChildBtn = elChosenOne.querySelector(".choose-btn");
        arr.forEach((currentEmployee) => {
          console.log("in forEace");

          if (currentEmployee.id === elChildBtn.id) {
            const elUpdateForm = document.querySelector(".update-form");
            currentEmployee.age = elUpdateAgeInput.value;
            currentEmployee.department = elUpdateDepartmentInput.value;
            currentEmployee.salary = elUpdateSalaryInput.value;
            utils.saveToStorage(EMPLOEES_STORAGE_KEY, arr);
            elUpdateImoji.classList.remove("toUpdateChosen");
            elFireBtn.classList.remove("toFireChosen");
            elUpdateForm.classList.add("hidden");
          }
        });
        controller.renderAll(gEmploees);
      }
    } else {
      console.log(
        "the update form should not be visible if chosenOne not exist! or you dident enter values"
      );
    }
  });
}
updateChosenEmployee(elUpdateBtn, gEmploees);

export const emploeesService = {
  gEmploees,
  newAmployee,
};
