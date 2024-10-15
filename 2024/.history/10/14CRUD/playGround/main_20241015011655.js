// grab reference to form

const formElem = document.querySelector("form");

// submit handler

formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  console.log(formElem.querySelector('input[name="1"]')); // FOO
  console.log(formElem.querySelector('input[name="2"]')); // BAR

  // construct a FormData object, which fires the formdata event
  const formData = new FormData(formElem);
  // formdata gets modified by the formdata event
  console.log(formData.get("field1")); // foo
  console.log(formData.get("field2")); // bar
});

// formdata handler to retrieve data

formElem.addEventListener("formdata", (e) => {
  console.log("formdata fired");

  // modifies the form data
  const formData = e.formData;
  // formdata gets modified by the formdata event
  formData.set("field1", formData.get("field1").toLowerCase());
  formData.set("field2", formData.get("field2").toLowerCase());
});
