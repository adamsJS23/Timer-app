export let state = [];

export function startCounter(TimerData) {
  // debugger
  let [hour, minute, second] = TimerData;
  if (hour === 0 && minute === 0 && second === 0) {
    state = [-1];
    return;
  }

  if (hour > 24) hour = 24;
  if (hour < 0) hour = 0;
  if (minute > 60) minute = 59;
  if (minute < 0) minute = 0;
  if (second > 60) second = 59;
  if (second < 0) second = 0;
  state = [hour, minute, second];

  console.log(state);
}
