export let state = [];

export function isValidTimer(TimerData) {
  // debugger
  let [hour, minute, second] = TimerData;
  if (hour === 0 && minute === 0 && second === 0) {
    state = [-1]; // Invalid timer
    return;
  }

  if (hour > 24) hour = 24;
  if (hour < 0) hour = 0;
  if (minute > 60) minute = 59;
  if (minute < 0) minute = 0;
  if (second > 60) second = 59;
  if (second < 0) second = 0;

  state = [hour, minute, second];
}

export function startCountDown() {
  let h = state[0];
  let m = state[1];
  let s = state[2];
  if (s === 0) {
    s = 3;
    if (m === 0) {
      m = 3;
      if (h === 0) {
        console.log("Counter Stop");
      }
      h--;
    } else {
      m--;
    }
  } else {
    s--;
  }

  state[0] = h;
  state[1] = m;
  state[2] = s;
}
