// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  let voices = speechSynthesis.getVoices(); //array of all the voice types

  const voiceLength = voices.length; //length of the voice array

  const synth = window.speechSynthesis; //object that allows speech

  const voiceSelect = document.getElementById("voice-select"); //dropdown menu

  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }

    voiceSelect.innerHTML = "";

  
    for (let i = 0; i < voiceLength; i++) {

      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default == true) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-name", voices[i].name);

      option.setAttribute("data-lang", voices[i].lang);

      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();


  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  

  const talkButton = document.querySelector("button");

  const textbox = document.getElementById("text-to-speak");

  const faceIcon = document.querySelector("img");

  const isSpeaking = synth.speaking;


  talkButton.addEventListener('click', (event) => {
    const utterThis = new SpeechSynthesisUtterance(textbox.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    textbox.blur();
    
    utterThis.onstart = () => {
      faceIcon.src = "assets/images/smiling-open.png";
    };

    utterThis.onend = () => {
      faceIcon.src = "assets/images/smiling.png";
    };
    
  });


}