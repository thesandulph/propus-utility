import engine from 'store/src/store-engine';
import cookieStorage from 'store/storages/cookieStorage';
import localStorage from 'store/storages/localStorage';
import memoryStorage from 'store/storages/memoryStorage';
import sessionStorage from 'store/storages/sessionStorage';
import {constantCase} from './value';

const storage_types = {
    'cookie': cookieStorage,
    'local': localStorage,
    'memory': memoryStorage,
    'session': sessionStorage,
};

export const createStorage = (type, ...params) => {
    const store = engine.createStore([storage_types[type]]);
    return (key, initial) => {
        const storage_key = constantCase([...params, key].filter(Boolean).join('-'));
        if (!store.get(storage_key)) {
            store.set(storage_key, initial)
        }
        return {
            clear: store.clearAll,
            each: store.each,
            get: () => store.get(storage_key),
            remove: () => store.remove(storage_key),
            set: data => store.set(storage_key, data),
            observe: observer => store.observe(storage_key, observer),
            unobserve: observer_id => store.unobserve(observer_id),
        }
    };
};
