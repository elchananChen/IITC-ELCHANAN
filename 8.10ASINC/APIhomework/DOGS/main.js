const imgEl = document.querySelector("#dog-img");

function name(Breed) {
  fetch(`https://dog.ceo/api/breed/${Breed}/images/random`)
    .then((response) => response.json())
    .then((data) => (imgEl.src = data.message));
}
let breed = name("akita");

const selectBreeds = document.querySelector("#breeds-list");
const options = document.querySelectorAll(".option");
const refreshBtn = document.querySelector("#refresh-btn");

refreshBtn.addEventListener("click", () => {
  const chosenBreed = selectBreeds.options[selectBreeds.selectedIndex].value;
  name(chosenBreed);
  console.log(chosenBreed);
});
