// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO


  //Horn-select function
  const selectElement = document.getElementById("horn-select");
  const audioSelect = document.querySelector(".hidden");
  const imageSelect = document.querySelector("img");


  selectElement.addEventListener("change", (event) => {
    if(event.target.value == "air-horn"){
      audioSelect.src = "assets/audio/air-horn.mp3";
      imageSelect.src = "assets/images/air-horn.svg";
    } else if(event.target.value == "car-horn"){
      audioSelect.src = "assets/audio/car-horn.mp3";
      imageSelect.src = "assets/images/car-horn.svg";
    } else {
      audioSelect.src = "assets/audio/party-horn.mp3";
      imageSelect.src = "assets/images/party-horn.svg";
    }
  });

}