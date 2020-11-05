import WelcomeScreen from './elements/WelcomeScreen.js'

class Page {
    constructor(element, args){
        this.element = element
        this.args = args
    }
    render(navCallback){
        return this.element({
            ...this.args,
            'navigateTo': navCallback
        })
    }
}

export class Welcome extends Page {
    constructor(){
        super(WelcomeScreen, {})
    }
}