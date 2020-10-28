import * as change_case from 'change-case';
import initialism from 'initialism';
import query_string from 'query-string';


export const camelCase = change_case.camelCase;
export const capitalCase = change_case.capitalCase;
export const constantCase = change_case.constantCase;
export const dotCase = change_case.dotCase;
export const headerCase = change_case.headerCase;
export const noCase = change_case.noCase;
export const paramCase = change_case.paramCase;
export const pascalCase = change_case.pascalCase;
export const pathCase = change_case.pathCase;
export const sentenceCase = change_case.sentenceCase;
export const snakeCase = change_case.snakeCase;

export const abbreviate = initialism;

export const parseQuery = query_string.parse;
export const stringifyQuery = query_string.stringify;
