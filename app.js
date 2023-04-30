// Controller
import timer from "./timerView.js";
import * as model from "./model.js";
let countDown;
const RESET_UI_SEC = 1500; // 1.5s
function controlStart() {
  // Pass inputs to Model for check
  model.isValidTimer(timer.getTimerData());

  // Check the timer is valid, if model.state is empty then inputs are nor valid
  if (!model.state.length) { 
    timer.renderError("Invalid timer");
    resetUI();
    return;
  }

  // Set buttons and inputs in start status
  timer.startStatus();

  countDown = setInterval(() => {
    // Start count down
    model.startCountDown(model.state);

    // Render current time
    timer.render(model.state);

    // Update input value
    timer.updateInputValue(model.state);

    // Chech timer is up
    isTimerUp(model.state);
  }, RESET_UI_SEC);
}

function isTimerUp(timerArray) {
  if (timerArray.every((item) => item === 0)) {

    // Reset timer
    clearInterval(countDown);

    // Render Message
    timer.renderMessage("Timer is up!!");

    // Call resetUI
    resetUI();
  }
}

function resetUI() {
  setTimeout(() => {
    timer.initialStatus();
    model.resetState();
  }, RESET_UI_SEC);
}

function controlPause() {
  // 1. Set buttons and inputs in pause status
  timer.pauseStatus();

  // 2. Pause count down
  clearInterval(countDown);
}

function controlStop() {
  // Render Message
  timer.renderMessage("Timer Stopped!!");
  // Reset timer
  clearInterval(countDown);

  // Call resetUI
  resetUI();
}

init();

function init() {
  timer.addHandlerStart(controlStart);
  timer.addHandlerPause(controlPause);
  timer.addHandlerStop(controlStop);
  timer.initialStatus();
}
