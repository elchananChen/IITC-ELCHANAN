const div = document.querySelector("div");
let webUrl = "github.com";

function creatIcon() {
  fetch(`https://icon.horse/icon/${webUrl}`)
    .then((res) => res.blob()) // Change to .blob() to handle image data
    .then((blob) => {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(blob); // Create an object URL for the image
      div.appendChild(img); // Append the image to the div
    })
    .catch((err) => console.log(`Error occurred: ${err}`));
}

function reassignIconBySelect() {
  document.querySelector("#select").addEventListener("change", async (ev) => {
    webUrl = ev.target.value;
    try {
      const res = await fetch(`https://icon.horse/icon/${webUrl}`);
      const blob = await res.blob();
      document.querySelector("img").src = URL.createObjectURL(blob);
      console.log("baba");
    } catch (err) {
      console.error(`not valid url: ${err}`);
    }
    console.log("baba");
  });
}
creatIcon();
reassignIconBySelect();
