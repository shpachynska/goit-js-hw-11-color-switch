const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startButton: document.querySelector("button[data-action='start']"),
  stopButton: document.querySelector("button[data-action='stop']"),
};

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startButton.addEventListener('click', () => {
  refs.startButton.setAttribute('disabled', 'disabled');
  intervalId = setInterval(() => {
    document.body.style.background = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
});

refs.stopButton.addEventListener('click', () => {
  if (refs.startButton['disabled']) {
    clearInterval(intervalId);
    refs.startButton.removeAttribute('disabled');
  }
});

// function onStartButtonClick() {
//   refs.startButton.setAttribute("disabled", "disabled");
//   intervalId = setInterval(() => {
//     document.body.style.background = colors[randomIntegerFromInterval(0, 5)];
//   }, 1000);
// }

// function onStopButtonClick() {
//   if (refs.startButton["disabled"]) {
//     clearInterval(intervalId);
//     refs.startButton.removeAttribute("disabled");
//   }
// }
