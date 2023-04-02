jest.useFakeTimers();

import Hamid from '../src/lib';

describe('Lib', () => {
  let lib: Hamid;
  describe('Instantiating the library', () => {
    it('should register DOM event listeners', () => {
      const kickOutFnMock = jest.fn();
      const addEventListenerSpy = jest.spyOn(window, 'addEventListener');

      lib = new Hamid(kickOutFnMock);

      expect(addEventListenerSpy).toHaveBeenCalledTimes(6);
    });
  });

  describe('Handling events', () => {
    let kickOutFnMock: jest.Mock;
    const fiveMinutesInMs = 300000;

    beforeEach(() => {
      kickOutFnMock = jest.fn();
      lib = new Hamid(kickOutFnMock);
      window.scrollTo = jest.fn();
    });

    it('should fire the callback after 5min from the last event', () => {
      window.dispatchEvent(new MouseEvent('scroll'));
      jest.advanceTimersByTime(fiveMinutesInMs);

      expect(kickOutFnMock).toHaveBeenCalled();
    });

    it('should not fire the event before 5min', () => {
      const twoMinutesInMs = 120000;

      window.dispatchEvent(new MouseEvent('mousemove'));
      jest.advanceTimersByTime(twoMinutesInMs);
      expect(kickOutFnMock).not.toHaveBeenCalled();
    });
  });
});
