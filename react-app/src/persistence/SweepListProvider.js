export default class SweepListProvider{
    constructor(list) {
        this.source = list;
        this.callbacks = {
            getList: () => {
                return this.source;
            },
            addItem: (item) => {
                this.source.items.push(item);
            }
        }
    }
}