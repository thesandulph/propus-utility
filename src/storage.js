import engine from 'store/src/store-engine';
import cookieStorage from 'store/storages/cookieStorage';
import localStorage from 'store/storages/localStorage';
import memoryStorage from 'store/storages/memoryStorage';
import sessionStorage from 'store/storages/sessionStorage';
import {changeCase} from './string';

export class Storage {
    static types = {
        'cookie': cookieStorage,
        'local': localStorage,
        'memory': memoryStorage,
        'session': sessionStorage,
    };

    _store = {};
    _key = null;

    constructor(type, ...params) {
        this.store = type;
        this.key = params;
    }

    initialize(value) {
        if (!this.get()) {
            this.set(value)
        }
    }

    get key() {
        return this._key;
    }

    set key(value) {
        this._key = changeCase(value.filter(Boolean).join('-'));
    }

    get store() {
        return this._store;
    }

    set store(value) {
        const type = Storage.types[value];
        this._store = engine.createStore([type]);
    }

    get() {
        return this.store.get(this.key);
    }

    set(value) {
        this.store.set(this.key, value);
    }

    remove() {
        this.store.remove(this.key);
    }
}
