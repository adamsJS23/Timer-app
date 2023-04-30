class Timer {
  _iptHour = document.querySelector(".input_h");
  _iptMinute = document.querySelector(".input_m");
  _iptSecond = document.querySelector(".input_s");
  _btnStart = document.querySelector(".btn_start");
  _btnPause = document.querySelector(".btn_pause");
  _btnStop = document.querySelector(".btn_stop");
  _messageContainer = document.querySelector(".message");

  getTimerData() {
    const hour = +this._iptHour.value || 0;
    const minute = +this._iptMinute.value || 0;
    const second = +this._iptSecond.value || 0;
    return [hour, minute, second];
  }

  render(currTimer) {
    const [hour, minute, second] = currTimer;
    const markup = `<p class='notification'><ion-icon name="timer-outline"></ion-icon>
    The current timer is ${this._formatValue(hour)}h:${this._formatValue(
      minute
      )}m:${this._formatValue(second)}s
      </p>
      `;
      this._clearContainer();
      this._insertHtml(markup);
      this._showNotification()
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

  _showNotification(){
    this._messageContainer.classList.remove('hidden')
  }

  _hideNotification(){
    this._messageContainer.classList.add('hidden')
  }

  renderMessage(message) {
    this._clearContainer();
    const markup = `<p class='notification'>
      ${message}
    </p>
    `;
    this._insertHtml(markup);
  }

  renderError(errorMessage) {
    this._clearContainer();
    const markup = `<p class='notification'>
    <ion-icon name="warning-outline" class="icon"></ion-icon>${errorMessage}
    </p>
    `;
    this._insertHtml(markup);
    this._showNotification();
  }

  initialStatus() {
    [this._iptHour, this._iptMinute, this._iptSecond].forEach((ipt) => {
      ipt.disabled = false;
      ipt.value = "";
    });

    this._btnStart.disabled = false;
    this._btnPause.disabled = true;
    this._btnStop.disabled = true;

    this._hideNotification();
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
    this._iptSecond.value = this._formatValue(second);
  }
}

export default new Timer();
