export default class Hamid {
  listenToEvents: Array<keyof WindowEventMap> = defaultUserEvents;

  idleTimer?: NodeJS.Timeout;

  constructor(private readonly kickOutFn: CallbackFunctionVariadic, private readonly defaultTimerInSeconds = 300) {
    this.defaultTimerInSeconds = defaultTimerInSeconds;
    this.kickOutFn = kickOutFn;
    this.init();
  }

  init() {
    this.listenToEvents.forEach((evt) => {
      window.addEventListener(evt, this.eventHandler(this.kickOutFn, this.defaultTimerInSeconds)); // TODO test "this" scope
    });
  }

  private eventHandler(fn: CallbackFunctionVariadic, timerInMs: number) {
    return () => {
      this.resetIdleTimer();
      this.idleTimer = setTimeout(() => {
        fn();
      }, timerInMs * 1000);
    };
  }

  resetIdleTimer() {
    clearTimeout(this.idleTimer);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CallbackFunctionVariadic = (...args: any[]) => void;

const defaultUserEvents: Array<keyof WindowEventMap> = [
  'mousemove',
  'touchstart',
  'scroll',
  'resize',
  'keydown',
  'click',
];
