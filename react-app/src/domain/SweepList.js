export const ListType = {
    ACTIONS: 'actions',
    CHECK:   'check'
}

export default class SweepList{
    constructor({
        name,
        type,
        items = []
    }) {
        throwIfTypeInvalid(type);

        this.name = name;
        this.type = type;
        this.items = [];
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
