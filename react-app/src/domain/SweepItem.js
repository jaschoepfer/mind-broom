export default class SweepItem {
    constructor({id, name}) {
        this.id = id;
        this.name = name;
        this.creationDate = new Date();
        this.done = false;
        this.doneDate = undefined;
    }
    setName(name) {
        this.name = name;
    }
    setDone(done) {
        this.done = done;
        if (done && this.doneDate === undefined) {
            this.doneDate = new Date();
        }
        if (!done) {
            this.doneDate = undefined;
        }
    }
}