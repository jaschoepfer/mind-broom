import React from 'react';
import logo from '../logo.svg'

export default function WelcomeScreen() {
    return (<div style={welcomeStyle}>
        <img src={logo} style={logoStyle} alt='I should get a logo' />
        <p style={welcomeTextStyle}>
            Sweep your mind!
        </p>
    </div>)
}

const welcomeStyle = {
    'text-align': 'center',
    'background-color': '#008080',
    height: '100%'
}

const logoStyle = {
    height: '40vmin'
}

const welcomeTextStyle = {
    'font-size': 'calc(10px + 2vmin)',
    'justify-content': 'center',
    color: 'white'
}