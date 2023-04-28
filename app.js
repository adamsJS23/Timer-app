// Controller
import timer from "./timerView.js";
import * as model from "./model.js";
let countDown;
function controlStart() {
  // 1. Start the counter
  model.isValidTimer(timer.getTimerData());

  // 2 Check if the timer is valid, -1 means invalid timer
  if (model.state.length === 1) {
    timer.renderError();
    timer.initialStatus();
    return;
  }

  // 3. Set buttons and inputs in start status
  timer.startStatus();

  countDown = setInterval(() => {
    // 4 Start count down
    model.startCountDown(model.state);
    // 4 Render current time
    timer.render(model.state,false);
    // 5 Update input value
    timer.updateInputValue(model.state);
    // Chech if timer is up
    if (model.state.every((item) => item === 0)) {
      // Reset timer
      clearInterval(countDown);
      // Call stopTimer
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  // Render time is up message
  // debugger;
  timer.render(model.state,true);
  setTimeout(() => {
    timer.clearContainer();
    // enable inputs, start button
    timer.initialStatus();
  }, 2000);
}

function controlPause() {
  // 1. Set buttons and inputs in pause status
  timer.pauseStatus();
  // 2. Pause count down
  clearInterval(countDown);
}

function controlStop() {
  // 1. Set buttons and inputs in stop status
  timer.initialStatus();

  // Reset timer
  clearInterval(countDown);
  // Call stopTimer
  stopTimer();
}

init();

function init() {
  timer.addHandlerStart(controlStart);
  timer.addHandlerPause(controlPause);
  timer.addHandlerStop(controlStop);
  timer.initialStatus();
}
