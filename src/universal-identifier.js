import * as uuid from 'uuid';

const generate = (version) => {
    switch (version) {
        case '1':
            return uuid.v1();
        case '3':
            return uuid.v3();
        case '5':
            return uuid.v5();
        default:
            return uuid.v4();
    }
};

const validate = value => uuid.validate(value);

const version = value => uuid.version(value);

export const universalIdentifier = {
    generate,
    validate,
    version,
};
