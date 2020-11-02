export class InternalError {
    description = 'If you see this, a developer did a no-no!\n' +
                  'Possible fixes:\n' +
                  ' - raise a bug with the developers\n' +
                  ' - make peace with the imperfect nature of this reality'
    constructor(message) {
        this.message = message;
    }
    toString() {
        return 'Internal Error: ' + this.message + '\n\n' + this.description
    }
}