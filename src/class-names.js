import {isArray, isObject} from './value';

export const classNames = (...params) =>
    params.map((item) => {
        if (isArray(item)) {
            return classNames(...item);
        } else if (isObject(item)) {
            return classNames(...Object.keys(item).filter(key => item[key]));
        }
        return item;
    }).filter(Boolean).join(' ');
