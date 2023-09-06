const texts = document.querySelector(".texts");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResult = true;

let p = document.createElement('p')

recognition.addEventListener('result', (e) => {
    console.log(e.results)
})

recognition.start()