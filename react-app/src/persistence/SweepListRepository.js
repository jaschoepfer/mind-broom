export default class SweepListRepository{
    constructor() {
        this.listMap = new Map();
    }
    addList(list){
        this.listMap.set(list.id, list);
    }
    getListById(id){
        const result = this.listMap.get(id);
        if (result === undefined) {
            throw 'unknown list ID: ' + id
        } else {
            return result;
        }
    }
}