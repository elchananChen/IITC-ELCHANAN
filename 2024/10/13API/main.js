const input = document.querySelector("input");
const div = document.querySelector("div");
let webUrl = "github.com";

// ALLMOST UTILE
async function reassignIcon() {
  try {
    const res = await fetch(`https://icon.horse/icon/${webUrl}`);
    const blob = await res.blob();
    document.querySelector("img").src = URL.createObjectURL(blob);
  } catch (err) {
    console.error(`not valid url: ${err}`);
  }
}

// First interaction

async function createIcon() {
  try {
    const res = await fetch(`https://icon.horse/icon/${webUrl}`);
    const blob = await res.blob();
    const img = document.createElement("img");
    img.src = URL.createObjectURL(blob);
    div.appendChild(img);
  } catch (err) {
    console.log(`Error occurred: ${err}`);
  }
}

createIcon();

// EVENT LISTENERS
function reassignIconBySelect() {
  document.querySelector("#select").addEventListener("change", async (ev) => {
    webUrl = ev.target.value;
    reassignIcon();
    console.log("baba");
  });
}

function reassignIconByInput() {
  document.querySelector(".change-btn").addEventListener("click", () => {
    webUrl = input.value;
    reassignIcon();
    input.value = "";
  });
}

reassignIconBySelect();
reassignIconByInput();
