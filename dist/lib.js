"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hamid {
    constructor(kickOutFn, defaultTimerInSeconds = 300) {
        this.kickOutFn = kickOutFn;
        this.defaultTimerInSeconds = defaultTimerInSeconds;
        this.listenToEvents = defaultUserEvents;
        this.defaultTimerInSeconds = defaultTimerInSeconds;
        this.kickOutFn = kickOutFn;
        this.init();
    }
    init() {
        this.listenToEvents.forEach((evt) => {
            window.addEventListener(evt, this.eventHandler(this.kickOutFn, this.defaultTimerInSeconds)); // TODO test "this" scope
        });
    }
    eventHandler(fn, timerInMs) {
        return () => {
            if (this.idleTimer) {
                this.resetIdleTimer();
            }
            this.idleTimer = setTimeout(() => {
                fn();
            }, timerInMs * 1000);
        };
    }
    resetIdleTimer() {
        clearTimeout(this.idleTimer);
    }
}
exports.default = Hamid;
const defaultUserEvents = [
    'mousemove',
    'touchstart',
    'scroll',
    'resize',
    'keydown',
    'click',
];
//# sourceMappingURL=lib.js.map