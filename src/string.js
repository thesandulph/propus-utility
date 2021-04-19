import initialism from 'initialism';
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

export const abbreviate = (string, length) => initialism(string, length);

export const changeCase = (target, value) => {
    switch (target) {
        case 'camel':
            return camelCase(value);
        case 'capital':
            return capitalCase(value);
        case 'constant':
            return constantCase(value);
        case 'dot':
            return dotCase(value);
        case 'header':
            return headerCase(value);
        case 'no':
            return noCase(value);
        case 'param':
            return paramCase(value);
        case 'pascal':
            return pascalCase(value);
        case 'path':
            return pathCase(value);
        case 'sentence':
            return sentenceCase(value);
        case 'snake':
            return snakeCase(value);
        default:
            return value;
    }
};
