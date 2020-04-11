import {
    parse,
    stringify,
} from 'query-string';

export abbreviate from 'initialism';


export const parseQuery = (value) => {
    const string = value.includes('?') ? value.split('?')[1] : value;
    return parse(string);
};

export const stringifyQuery = (value) => {
    const string = stringify(value);
    return string ? `?${string}` : string;
};
