export const ListType = {
    ACTIONS: 'actions',
    CHECK:   'check'
}

export default class SweepList{
    constructor(type) {
        throwIfTypeInvalid(type)
        this.type = type
        this.items = []
    }
    getItems(){
        return this.items
    }
    addItem({
        title
    } = {}) {
        this.items.push({title: title})
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
