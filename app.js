// Controller
import timer from "./timerView.js";
import * as model from './model.js'
function controlStart() {
  // 1. Set buttons and inputs in start status
  debugger
  timer.startStatus();
  // 2. Start the counter
  model.startCounter(timer.getTimerData()) 
}

function controlPause(){
  // 1. Set buttons and inputs in pause status
  timer.pauseStatus();
  // 2. Start the counter
  model.startCounter(timer.getTimerData())
}

function controlStop(){
  // 1. Set buttons and inputs in stop status
  timer.initialStatus();
  // 2. Start the counter
  model.startCounter(timer.getTimerData())
}

init();

function init() {
  timer.addHandlerStart(controlStart);
  timer.addHandlerPause(controlPause);
  timer.addHandlerStop(controlStop);
  timer.initialStatus()
}
