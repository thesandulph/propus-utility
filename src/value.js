import isInvalidPath from 'is-invalid-path';

export equal from 'fast-deep-equal';

const patterns = {
    currency: /\B(?=(\d{3})+(?!\d))/g,
    alphabet:  /^\D*$/g,
    email: new RegExp('^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'),
    url: new RegExp('^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$', 'i'),
};

export const isAlphabet = value => !!patterns.alphabet.test(value);

export const isEmail = value => !!patterns.email.test(value);

export const isUrl = value => !!patterns.url.test(value);

export const isPath = value => !isInvalidPath(value);

export const isNumber = value => typeof value === 'number' && isFinite(value);

export const isNumeric = value => !isNaN(parseFloat(value)) && isFinite(value);

export const isString = value => typeof value === 'string' || value instanceof String;

export const isArray = value => value && typeof value === 'object' && value.constructor === Array;

export const isObject = value => value && typeof value === 'object' && value.constructor === Object;

export const isEmptyObject = value => isObject(value) && !Object.keys(value).length;

export const isPromise = value => value && typeof value === 'object' && value.constructor === Promise;

export const isRegExp = value => value && typeof value === 'object' && value.constructor === RegExp;

export const isFunction = value => typeof value === 'function';

export const isBoolean = value => typeof value === 'boolean';

export const isSymbol = value => typeof value === 'symbol';

export const isDate = value => value instanceof Date;

export const isError = value => value instanceof Error;

export const hasValue = value => value !== null && typeof value !== 'undefined';

export const rangeArray = (start, end) => Array.from({length: end - start}, (item, index) => start + index + 1);

export const toArray = value => (isArray(value) ? value : [value]).filter(Boolean);

export const toObject = (value) => {
    if(isObject(value)) {
        return value;
    }
    if(isArray(value)) {
        return {...value};
    }
    return null;
};

export const toCurrency = (value, separator = ',') => {
    if (isNumeric(value)) {
        return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    return value;
};
