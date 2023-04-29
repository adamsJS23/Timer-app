class Timer {
  _iptHour = document.querySelector(".input_h");
  _iptMinute = document.querySelector(".input_m");
  _iptSecond = document.querySelector(".input_s");
  _btnStart = document.querySelector(".btn_start");
  _btnPause = document.querySelector(".btn_pause");
  _btnStop = document.querySelector(".btn_stop");
  _currentTime = document.querySelector(".current_time");
  _messageContainer = document.querySelector(".message");

  getTimerData() {
    const hour = +this._iptHour.value || 0;
    const minute = +this._iptMinute.value || 0;
    const second = +this._iptSecond.value || 0;
    return [hour, minute, second];
  }

  render(currTimer) {
    const [hour, minute, second] = currTimer;
    const markup = `<p class="message">
    The current time is ${this._formatValue(hour)}h:${this._formatValue(
      minute
    )}m:${this._formatValue(second)}s
        </p>
        `;
    this._clearContainer();
    this._insertHtml(markup);
  }

  _formatValue(value) {
    if (value.toString().trim().length === 1) {
      return `0${value}`;
    } else return value;
  }

  _clearContainer() {
    this._messageContainer.innerHTML = "";
  }

  _insertHtml(markup) {
    this._messageContainer.insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message) {
    this._clearContainer();
    const markup = `<p class="message">
      ${message}
    </p>
    `;
    this._insertHtml(markup);
  }

  renderError(errorMessage) {
    this._clearContainer();
    const markup = `<p class="error_message">
      ${errorMessage}
    </p>
    `;
    this._insertHtml(markup);
  }

  initialStatus() {
    [this._iptHour, this._iptMinute, this._iptSecond].forEach((ipt) => {
      ipt.disabled = false;
      ipt.value = "";
    });

    this._btnStart.disabled = false;
    this._btnPause.disabled = true;
    this._btnStop.disabled = true;

    this._clearContainer();
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

  addHandlerStart(handler) {
    this._btnStart.addEventListener("click", handler);
  }

  addHandlerPause(handler) {
    this._btnPause.addEventListener("click", handler);
  }

  addHandlerStop(handler) {
    this._btnStop.addEventListener("click", handler);
  }

  updateInputValue(timerArray) {
    const [hour, minute, second] = timerArray;

    this._iptHour.value = this._formatValue(hour);
    this._iptMinute.value = this._formatValue(minute);
    // debugger
    this._iptSecond.value = this._formatValue(second);
  }
}

export default new Timer();
