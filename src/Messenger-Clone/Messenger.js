import React from 'react';
import Messages from './Messages/Messages';
import logo from '../images/messenger-logo.png';
import './Messenger.css'
const Messenger = () => {

    return <div className='messenger'>
        <img src={logo} alt='messenger' style={{width: '100px', height: '100px'}}/>
        <Messages/>
    </div>
}

export default Messenger;