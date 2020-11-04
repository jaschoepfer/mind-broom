import WelcomeScreen from './elements/WelcomeScreen.js'

class Page {
    constructor(element, args){
        this.element = element
        this.args = args
    }
    render(navCallbacks){
        return this.element({
            ...this.args,
            'navigation': navCallbacks
        })
    }
}

export class Welcome extends Page {
    constructor(){
        super(WelcomeScreen, {})
    }
}