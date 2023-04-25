class Timer {
  _iptHour = document.querySelector(".input_h");
  _iptMinute = document.querySelector(".input_m");
  _iptSecond = document.querySelector(".input_s");
  _btnStart = document.querySelector(".btn_start");
  _btnPause = document.querySelector(".btn_pause");
  _btnStop = document.querySelector(".btn_stop");
  _currentTime = document.querySelector(".current_time");

  getTimerData() {
    const hour = +this._iptHour.value;
    const minute = +this._iptMinute.value;
    const second = +this._iptSecond.value;
    return [hour, minute, second];
  }

  addHandlerStart(handler) {
    this._btnStart.addEventListener("click", handler);
    handler();
  }

  addHandlerPause(handler) {
    this._btnPause.addEventListener("click", handler);
    handler();
  }

  addHandlerStop(handler) {
    this._btnStop.addEventListener("click", handler);
    handler();
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
  // when With stop status we call initialStatus
  stopStatus(){
    // this.initialStatus()
  }
}

export default new Timer();
