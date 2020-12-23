import parse from 'url-parse';
import {isUrl, isPath} from './value';

export class Url {
    type = 'none';
    href = '';
    origin = '';
    username = '';
    password = '';
    hostname = '';
    pathname = '';
    port = '';
    fragment = '';
    protocol = '';
    query_params = {};
    parsed = {};

    constructor(value) {
        this.parsed = parse(value);
        this.prepare();
    }

    prepare(value = this.parsed) {
        this.href = value.href;
        this.origin = value.origin === 'null' ? '' : value.origin;
        this.username = value.username;
        this.password = value.password;
        this.hostname = value.hostname;
        this.pathname = value.pathname;
        this.port = value.port;
        this.protocol = value.protocol.split(':')[0] || '';
        this.fragment = value.hash.split('#')[1] || '';
        this.query_params = value.query;
        this.type = this.getType();
    }

    getType(value = this.toString()) {
        if (isUrl(value)) {
            return 'url';
        }
        if (isPath(value)) {
            return 'path';
        }
        return 'none';
    }

    toString() {
        return this.parsed.toString();
    }

    updateHref(value) {
        this.parsed.set('href', value);
        this.prepare();
    }

    updateOrigin(value) {
        this.parsed.set('origin', value);
        this.prepare();
    }

    updateUserName(value) {
        this.parsed.set('username', value);
        this.prepare();
    }

    updatePassword(value) {
        this.parsed.set('password', value);
        this.prepare();
    }

    updateHostName(value) {
        this.parsed.set('hostname', value);
        this.prepare();
    }

    updatePathName(value) {
        this.parsed.set('pathname', value);
        this.prepare();
    }

    updatePort(value) {
        this.parsed.set('port', value);
        this.prepare();
    }

    updateProtocol(value) {
        this.parsed.set('protocol', `${value}:`);
        this.prepare();
    }

    updateFragment(value) {
        this.parsed.set('hash', value);
        this.prepare();
    }

    updateQueryParams(value) {
        this.parsed.set('query', value);
        this.prepare();
    }
}

export const parseQueryParams = (search) => {
    const value = search.startsWith('?') ? search.substr(1) : search;
    return value.split('&').reduce((accumulator, item) => {
        const [key, value] = item.split('=');
        return {
            ...accumulator,
            [key]: value,
        };
    }, {});
};

export const stringifyQueryParams = (query_params) => {
    return Object.keys(query_params).reduce((accumulator, item) => {
        const prefix = accumulator ? `${accumulator}&` : `?${accumulator}`;
        return `${prefix}${item}=${query_params[item]}`
    }, '');
};
