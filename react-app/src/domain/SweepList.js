export const ListType = {
    ACTIONS: 'actions',
    CHECK:   'check'
}

export default class SweepList{
    constructor({
        id,
        name,
        type
    }) {
        throwIfTypeInvalid(type);
        this.id = id;
        this.name = name;
        this.type = type;
    }
    setName(name) {
        this.name = name;
    }
}

function throwIfTypeInvalid(type) {
    switch (type) {
        case ListType.ACTIONS:
        case ListType.CHECK:
            break;
        default:
            throw new Error(`Invalid type for SweepList: ${type}`);
    }
}
