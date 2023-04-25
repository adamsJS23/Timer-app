// Controller
import timer from "./timerView.js";
import * as model from "./model.js";
function controlStart() {
  // 1. Start the counter
  model.startCounter(timer.getTimerData());

  // 2 Check if the timer is valid, -1 means invalid timer
  if (model.state.length === 1) {
    timer.renderError();
    timer.initialStatus();
    return;
  }

  // 3. Set buttons and inputs in start status
  timer.startStatus();

  // 4 Render the current time
  timer.render();
}

function controlPause() {
  // 1. Set buttons and inputs in pause status
  timer.pauseStatus();
  // 2. Start the counter
  model.startCounter(timer.getTimerData());
}

function controlStop() {
  // 1. Set buttons and inputs in stop status
  timer.initialStatus();
  // 2. Start the counter
  model.startCounter(timer.getTimerData());
}

init();

function init() {
  timer.addHandlerStart(controlStart);
  timer.addHandlerPause(controlPause);
  timer.addHandlerStop(controlStop);
  timer.initialStatus();
}
