import {isFunction} from './value';

export const debounce = (callback, delay) => {
    let in_debounce;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(in_debounce);
        in_debounce = setTimeout(() => callback.apply(context, args), delay)
    };
};

export const once = (callback, context) => {
    let result;
    return function () {
        if (callback) {
            result = callback.apply(context || this, arguments);
            callback = null;
        }
        return result;
    };
};

export const poll = (callback, delay, interval) => {
    const end_time = Number(new Date()) + delay;
    const check = (resolve, reject) => {
        const result = callback();
        if (result) {
            resolve(result);
        } else if (Number(new Date()) < end_time) {
            setTimeout(check, interval, resolve, reject);
        } else {
            reject(new Error('Poll timed out for ' + callback + ': ' + arguments));
        }
    };
    return new Promise(check);
};

export const run = (callback, ...params) => {
    if (isFunction(callback)) {
        return callback(...params);
    }
    return callback;
};

export const throttle = (callback, delay) => {
    let in_throttle;
    return function () {
        const context = this;
        if (!in_throttle) {
            callback.apply(context, arguments);
            in_throttle = true;
            setTimeout(() => {
                in_throttle = false;
            }, delay)
        }
    }
};
