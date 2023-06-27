import Dory from '../src/Dory';

describe('Dory 🐠', () => {
  beforeEach(() => {
    Dory.getInstance().removeAll();
  });

  test("Method 'set' should set a global value", () => {
    Dory.getInstance().set('username', 'JohnDoe');
    const username = Dory.getInstance().get('username');
    expect(username).toEqual('JohnDoe');
  });

  test("Method 'get' should return the current value of a global value", () => {
    Dory.getInstance().set('username', 'JohnDoe');
    const username = Dory.getInstance().get('username');
    expect(username).toEqual('JohnDoe');
  });

  test("Method 'remove' should remove a global value", () => {
    Dory.getInstance().set('username', 'JohnDoe');
    Dory.getInstance().remove('username');
    const username = Dory.getInstance().get('username');
    expect(username).toBeUndefined();
  });

  test("Method 'addChangeListener' should invoke the callback when the value changes", () => {
    const callback = jest.fn();
    Dory.getInstance().set('counter', 0);
    Dory.getInstance().addChangeListener(callback);

    Dory.getInstance().set('counter', 1);
    Dory.getInstance().set('counter', 2);

    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledWith('counter', 1);
    expect(callback).toHaveBeenCalledWith('counter', 2);

    Dory.getInstance().removeChangeListener(callback);

    Dory.getInstance().set('counter', 3);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  test("Method 'removeChangeListener' should remove the specified listener", () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    Dory.getInstance().set('counter', 0);
    Dory.getInstance().addChangeListener(callback1);
    Dory.getInstance().addChangeListener(callback2);

    Dory.getInstance().set('counter', 1);
    Dory.getInstance().removeChangeListener(callback1);
    Dory.getInstance().set('counter', 2);

    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(2);
  });

  test("Method 'removeAllListeners' should remove all listeners for a key", () => {
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    Dory.getInstance().set('counter', 0);
    Dory.getInstance().addChangeListener(callback1);
    Dory.getInstance().addChangeListener(callback2);

    Dory.getInstance().set('counter', 1);
    Dory.getInstance().removeAllListeners();
    Dory.getInstance().set('counter', 2);

    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);
  });
});
