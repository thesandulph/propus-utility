import {
    parse,
    stringify,
} from 'query-string';
import {
    camelCase,
    capitalCase,
    constantCase,
    dotCase,
    headerCase,
    noCase,
    paramCase,
    pascalCase,
    pathCase,
    sentenceCase,
    snakeCase,
} from 'change-case';

export abbreviate from 'initialism';

export {
    camelCase,
    capitalCase,
    constantCase,
    dotCase,
    headerCase,
    noCase,
    paramCase,
    pascalCase,
    pathCase,
    sentenceCase,
    snakeCase,
};

export const parseQuery = (value) => {
    const string = value.includes('?') ? value.split('?')[1] : value;
    return parse(string);
};

export const stringifyQuery = (value) => {
    const string = stringify(value);
    return string ? `?${string}` : string;
};
