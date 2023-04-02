/// <reference types="node" />
export default class Hamid {
    private readonly kickOutFn;
    private readonly defaultTimerInSeconds;
    listenToEvents: Array<keyof WindowEventMap>;
    idleTimer?: NodeJS.Timeout;
    constructor(kickOutFn: CallbackFunctionVariadic, defaultTimerInSeconds?: number);
    init(): void;
    private eventHandler;
    resetIdleTimer(): void;
}
type CallbackFunctionVariadic = (...args: any[]) => void;
export {};
