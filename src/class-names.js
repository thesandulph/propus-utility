import {isArray, isObject} from './value';

export const classNames = (...params) =>
    params.reduce((accumulator, item) => {
        let value = item;
        if (isArray(value)) {
            value = classNames(...value);
        } else if (isObject(value)) {
            value = classNames(...Object.keys(item).filter(key => item[key]));
        }
        return [
            ...accumulator,
            value,
        ];
    }, []).filter(Boolean).join(' ');
