import {
    parseQuery,
    stringifyQuery,
} from './string';

export class Uri{
    constructor(url) {
        this.initialize(url);
    }

    initialize(url) {
        try {
            const uri = new URL(url);
            this.get = key => key ? uri[key] : uri;
        } catch(e) {
            this.get = key => key ? {} : null;
        }
    }

    get href() {
        return this.get().href;
    }

    set href(value) {
        this.get().href = value;
    }

    get origin() {
        return this.get().origin;
    }

    set origin(value) {
        this.get().origin = value;
    }

    get protocol() {
        return this.get().protocol.split(':')[0];
    }

    set protocol(value) {
        this.get().protocol = `${value}:`;
    }

    get username() {
        return this.get().username;
    }

    set username(value) {
        this.get().username = value;
    }

    get password() {
        return this.get().password;
    }

    set password(value) {
        this.get().password = value;
    }

    get hostname() {
        return this.get().hostname;
    }

    set hostname(value) {
        this.get().hostname = value;
    }

    get port() {
        return this.get().port;
    }

    set port(value) {
        this.get().port = value;
    }

    get pathname() {
        return this.get().pathname;
    }

    set pathname(value) {
        this.get().pathname = value;
    }

    get hash() {
        return this.get().hash.split('#')[1];
    }

    set hash(value) {
        this.get().hash = value ? `#${value}` : value;
    }

    get query_params () {
        return parseQuery(this.get().search);
    }

    set query_params(value) {
        this.get().search = stringifyQuery(value);
    }
}
