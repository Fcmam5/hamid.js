class Hamid {
  listenToEvents = ['mousemove', 'touchstart', 'scroll', 'resize', 'keydown']; // TODO: Parameterize me

  defaultTimerInSeconds = 300;

  //   onBeforeKickOut; TODO

  kickOutFn;

  //   storeTimer TODO

  idleTimer;

  constructor({ defaultTimerInSeconds = 300, kickOutFn = null }) {
    this.defaultTimerInSeconds = defaultTimerInSeconds;
    this.kickOutFn = kickOutFn;
  }

  init() {
    if (!this.kickOutFn) {
      throw new Error('"kickOutFn" parameter is required!');
    }

    // this.idleTimer
    this.listenToEvents.forEach((evt) => {
      window.addEventListener(evt, this.eventHandler(this.kickOutFn)); // TODO test "this" scope
    });
  }

  eventHandler(fn) {
    clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => {
      fn();
    }, this.defaultTimerInSeconds * 1000);
  }
}

module.exports = Hamid;
