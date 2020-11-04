import React from 'react';
import logo from '../logo.svg'

export default function WelcomeScreen(props) {
    return (<div style={welcomeStyle}>
        <img src={logo} style={logoStyle} alt='I should get a logo' />
        <p style={welcomeTextStyle}>
            Sweep your mind!
        </p>
    </div>)
}

const welcomeStyle = {
    textAlign: 'center',
    backgroundColor: '#008080',
    height: '100%'
}

const logoStyle = {
    height: '40vmin'
}

const welcomeTextStyle = {
    fontSize: 'calc(10px + 2vmin)',
    justifyContent: 'center',
    color: 'white'
}