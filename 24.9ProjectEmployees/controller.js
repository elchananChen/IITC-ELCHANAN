import { utils } from "./utile.js";
import { emploeesService } from "./employees.service.js";

function renderAll(arr) {
  let elTable = document.querySelector(".table");
  elTable.innerHTML = "";
  arr.forEach((currentEmployee) => {
    elTable.innerHTML += `<tr>
              <td>${currentEmployee.firstName}</td>
              <td>${currentEmployee.lastName}</td>
              <td>${currentEmployee.age}</td>
              <td>${currentEmployee.startDate}</td>
              <td>${currentEmployee.department}</td>
              <td>${currentEmployee.salary}</td>
              <td> <button id="${currentEmployee.id}" class="choose-btn">•</button> </td>
            </tr>`;
  });
}
renderAll(emploeesService.gEmploees);
console.log(emploeesService.gEmploees);
