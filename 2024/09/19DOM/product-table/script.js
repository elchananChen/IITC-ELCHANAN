const PRODUCTS_STORAGE_KEY = "products";

//  Model
let gProducts = getProducts();
const gOrder = [];

//DOM ELEMENTS

// HELPER FUNCTION
function saveProducts() {
  localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(gProducts));
}

// HELPER FUNCTION
function getProducts() {
  let products = JSON.parse(localStorage.getItem(PRODUCTS_STORAGE_KEY));
  if (!products) products = [];
  return products;
}

// EVENT LISTENERS

//  RENDER MODEL PRODUCTS
function renderProducts() {
  // LOOP ON PRODUCTS ARR
  for (let i = 0; i < gProducts.length; i++) {
    const product = gProducts[i];

    //CREAT DOM ELEMENTS
    const elUl = document.querySelector(".products-display");
    const elIl = document.createElement("li");
    const elSpanName = document.createElement("span");
    const elSpanPrice = document.createElement("span");
    const elAddBtn = document.createElement("button");

    //SET CLASSES
    elIl.setAttribute("class", "li-display");
    elSpanName.setAttribute("class", "span-display");
    elSpanPrice.setAttribute("class", "span-display");
    elAddBtn.setAttribute("id", `${product.id}`);

    // console.log(elAddBtn.id);
    // console.log(product.id.toString());

    // EVENT LISTENER ADD TO ORDER ARRAY

    elAddBtn.addEventListener("click", (ev) => {
      const clicked = gOrder.find((el) => {
        return elAddBtn.id === el.id.toString();
      });
      const newProduct = { ...product, quentity: 1 };

      if (clicked === undefined) {
        gOrder.push(newProduct);
      } else {
        clicked.quentity++; // אובייקט נשמר כרפרנס ולכן האובייקט במערך ישתנה!!
      }

      renderOrderArr(gOrder);
      const sum = sumArrObjKey(gOrder, "price", "quentity");
      const elSum = document.querySelector(".sum");
      elSum.textContent = sum;
    });

    //ADD CONTENT AND RENDER
    elSpanName.textContent = product.name.toString().toLowerCase();
    elSpanPrice.textContent = product.price;
    elAddBtn.textContent = "add to cart";
    elIl.appendChild(elSpanName);
    elIl.appendChild(elSpanPrice);
    elIl.appendChild(elAddBtn);
    elUl.appendChild(elIl);
  }
}

//

// DELET - ADD EVENT LISENER

//FIND BUTTEN ID , PROVAID IT TO FUNCTION THET DELETE BY ID
function deleteItemListener(arr) {
  console.log(arr);

  arr.forEach((el) => {
    el.addEventListener("click", (ev) => {
      ev.preventDefault();
      const btnID = ev.target.getAttribute("id");
      console.log("btnID:", btnID);

      deleteFromArryByID(gOrder, btnID);
    });
  });
}

// 📝 NEED TO UPDATE THE TOTAL PRICE ON DELETE EVENT

// DELETE BY ID
function deleteFromArryByID(arr, elId) {
  for (let i = 0; i < arr.length; i++) {
    if (elId === `a${arr[i].id}`) {
      arr.splice(i, 1);
      // renderOrderArr(gOrder);
    }
  }
  renderOrderArr(gOrder);
  // console.log(gOrder);
}

//RENDER ORDER ARRAY TO TABLE
function renderOrderArr(arr) {
  const elTable = document.querySelector(".table");
  elTable.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    const currentObj = arr[i];
    elTable.innerHTML += ` <tr>
             <td>${currentObj.name}</td>
             <td>${currentObj.price}</td>
             <td>${currentObj.quentity}</td>
             <td>${currentObj.price * currentObj.quentity}</td>
             <td><button class="delete-button" id="a${
               currentObj.id
             }">delete</button></td>
             </tr>`;
  }
  const elDeleteBtnArr = document.querySelectorAll(".delete-button"); // add delete event listener
  // console.log(Array.from(elDeleteBtnArr));
  deleteItemListener(elDeleteBtnArr);
}

// SUM FUNCTION

function sumArrObjKey(arr, strPrice, strQuentity) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element[strPrice] * element[strQuentity];
  });

  return sum;
}

renderProducts();
