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

  const updateImoji = document.querySelector(".update-emoji");
  const updateForm = document.querySelector(".update-form");
  const addEmoji = document.querySelector(".add-emoji");
  const addForm = document.querySelector(".add-form");
  const chooseBtns = document.querySelectorAll(".choose-btn");
  const fireBtn = document.querySelector(".fire-btn");
  function popUpWarning() {
    const updateEmoji = document.querySelector(".update-emoji");
    const warning = document.querySelector(".warning");
    updateEmoji.addEventListener("mouseenter", function () {
      if (!updateImoji.classList.contains("toUpdateChosen")) {
        warning.classList.remove("hidden"); // מראה את הטקסט
      }
    });
    updateEmoji.addEventListener("mouseleave", function () {
      warning.classList.add("hidden"); // מסתיר את הטקסט
    });
  }

  // WARNING WHEN NOT CHOOSE AND WENT TO UPDATE
  popUpWarning();

  onlyOpen(updateImoji, addForm);
  onlyOpen(addEmoji, updateForm);

  toggleUniqueClassToClosestSpecificElement(chooseBtns, "chosenOne", "tr"); // order importent
  toggleClasIfClassChosenOneExist(chooseBtns, fireBtn, "toFireChosen");
  toggleClasIfClassChosenOneExist(chooseBtns, updateImoji, "toUpdateChosen");
}

const addForm = document.querySelector(".add-form");
const addEmoji = document.querySelector(".add-emoji");
const updateImoji = document.querySelector(".update-emoji");
const updateForm = document.querySelector(".update-form");
// CONDITON
function toggelFormByClassIfContainsOtherClass(element, form, clas) {
  element.addEventListener("click", () => {
    if (element.classList.contains("toUpdateChosen")) {
      form.classList.toggle(clas);
    }
  });
}
toggelFormByClassIfContainsOtherClass(updateImoji, updateForm, "hidden");

utils.toggelFormByClass(addEmoji, addForm, "hidden");
renderAll(emploeesService.gEmploees);
renderAll(emploeesService.gEmploees);

// HIDDEN "UPDATE EMPLOYEE FORM" TOGGLE

// ONLY ONE INPUT OPEN AT A TIME

function onlyOpen(toOpen, toHidde) {
  toOpen.addEventListener("click", () => {
    toHidde.classList.add("hidden");
  });
}

// onlyOpen(updateImoji, addForm);
//   onlyOpen(addEmoji, updateForm);
// ADD CLASSES  WHEN CHOOSE BTN CLICKED

function toggleClasIfClassChosenOneExist(arr, element, clas) {
  arr.forEach((el) => {
    if (typeof clas === "string") {
      el.addEventListener("click", (ev) => {
        const check = document.querySelector(".chosenOne");
        element.classList.toggle(clas, check);
      });
    } else {
      console.log(
        "typeof clas in toggleClasIfClassChosenOneExist have to be string"
      );
    }
  });
}

function toggleUniqueClassToClosestSpecificElement(arr, clas, elementName) {
  if (typeof clas === "string" && typeof elementName === "string") {
    arr.forEach((item) => {
      item.addEventListener("click", (ev) => {
        arr.forEach((el) => {
          if (ev.target !== el) {
            el.closest(elementName).classList.remove(clas);
          }
        });
        if (item.closest(elementName)) {
          item.closest(elementName).classList.toggle(clas);
        }
      });
    });
  } else {
    console.log(
      "typeof clas in toggelUniqueClassToClosestSpecificElement have to be string"
    );
  }
}

export const controller = {
  renderAll,
};
