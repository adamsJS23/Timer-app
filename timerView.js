class Timer {
  _iptHour = document.querySelector(".input_h");
  _iptMinute = document.querySelector(".input_m");
  _iptSecond = document.querySelector(".input_s");
  _btnStart = document.querySelector(".btn_start");
  _btnPause = document.querySelector(".btn_pause");
  _btnStop = document.querySelector(".btn_stop");
  _currentTime = document.querySelector(".current_time");
  _messageContainer = document.querySelector(".message");
  _errorMessage = "Invalid timer";
  _message = "The current time is ";

  getTimerData() {
    const hour = +this._iptHour.value;
    const minute = +this._iptMinute.value;
    const second = +this._iptSecond.value;
    return [hour, minute, second];
  }

  addHandlerStart(handler) {
    this._btnStart.addEventListener("click", handler);
  }

  addHandlerPause(handler) {
    this._btnPause.addEventListener("click", handler);
  }

  addHandlerStop(handler) {
    this._btnStop.addEventListener("click", handler);
  }

  initialStatus() {
    [this._iptHour, this._iptMinute, this._iptSecond].forEach(
      (ipt) => (ipt.disabled = false)
    );
    this._btnStart.disabled = false;
    this._btnPause.disabled = true;
    this._btnStop.disabled = true;
  }

  startStatus() {
    [this._iptHour, this._iptMinute, this._iptSecond].forEach(
      (ipt) => (ipt.disabled = true)
    );
    this._btnStart.disabled = true;
    this._btnPause.disabled = false;
    this._btnStop.disabled = false;
  }

  pauseStatus() {
    [this._iptHour, this._iptMinute, this._iptSecond].forEach(
      (ipt) => (ipt.disabled = false)
    );
    this._btnStart.disabled = false;
    this._btnPause.disabled = true;
    this._btnStop.disabled = false;
  }

  render(currTimer, isTimerUp) {
    let markup;
    if (isTimerUp) {
      markup = `<p class="message">
    Timer is up</p>
    `;
    } else {
      const [hour, minute, second] = currTimer;
      markup = `<p class="message">
      ${this._message}${this._formatValue(hour)}:${this._formatValue(
        minute
      )}:${this._formatValue(second)}
        </p>
        `;
    }
    this._messageContainer.innerHTML = "";
    this._messageContainer.insertAdjacentHTML("afterbegin", markup);
  }

  clearContainer() {
    this._messageContainer.innerHTML = "";
  }

  updateInputValue(timerArray) {
    const [hour, minute, second] = timerArray;

    this._iptHour.value = this._formatValue(hour);
    this._iptMinute.value = this._formatValue(minute);
    this._iptSecond.value = this._formatValue(second);
  }

  renderError(errorMessage = this._errorMessage) {
    this._messageContainer.innerHTML = "";
    const markup = `<p class="error_message">
      ${errorMessage}
    </p>
    `;
    this._messageContainer.insertAdjacentHTML("afterbegin", markup);
  }

  _formatValue(value) {
    if (value.toString.lenght === 2) return value;
    return `0${value}`;
  }
}

export default new Timer();
