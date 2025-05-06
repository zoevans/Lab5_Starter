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

  //Volume Control function
  const volInput = document.getElementById("volume");
  const volIcon = document.querySelector("#volume-controls img");
  const volControl = document.getElementById("volume-controls");

  volControl.addEventListener('input', (event) => {
    if(volInput.value == 0){
      volIcon.src = "assets/icons/volume-level-0.svg";
    } else if(volInput.value > 0 && volInput.value < 33){
      volIcon.src = "assets/icons/volume-level-1.svg";
    } else if(volInput.value > 32 && volInput.value < 67){
      volIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volIcon.src = "assets/icons/volume-level-3.svg";
    }

    audioSelect.volume = (volInput.value)/100;

  });

}