// // grab reference to form

// const formElem = document.querySelector("form");

// // submit handler

// formElem.addEventListener("submit", (e) => {
//   // on form submission, prevent default
//   e.preventDefault();

//   console.log(formElem.querySelector('input[name="1"]')); // FOO
//   console.log(formElem.querySelector('input[name="2"]')); // BAR

//   // construct a FormData object, which fires the formdata event
//   const formData = new FormData(formElem);
//   // formdata gets modified by the formdata event
//   console.log(formData.get("1")); // foo
//   console.log(formData.get("2")); // bar
// });

// // formdata handler to retrieve data

// formElem.addEventListener("formdata", (e) => {
//   console.log("formdata fired");

//   // modifies the form data
//   const formData = e.formData;
//   // formdata gets modified by the formdata event
//   formData.set("1", formData.get("1").toLowerCase());
//   formData.set("2", formData.get("2").toLowerCase());
// });

formElem.onformdata = (e) => {
  console.log("formdata fired");

  // modifies the form data
  const formData = e.formData;
  formData.set("1", formData.get("1").toLowerCase());
  formData.set("2", formData.get("2").toLowerCase());
};
