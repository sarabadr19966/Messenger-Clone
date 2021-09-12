import React, { useState , useRef, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore/lite';
import { FormControl } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import logo from '../images/messenger-logo.png';
import db from './Apis/firebase';
import Messages from './Messages/Messages';
import './Messenger.css';

const Messenger = () => {
    const [userName, setUserName] = useState('');
    const [input, setInput] = useState('');
    const scroll = useRef(null);   
    const inputRef = useRef(null);

    useEffect(() => {
        setUserName(prompt('please enter your name'));
        scroll.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });  
        inputRef.current.focus();
    },[])

    useEffect(() => {
        scroll.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    })

    const sendMessages = (e) => {
        e.preventDefault();
        addDoc(collection(db, "messages"), {
            message: input,
            userName: userName,
            timeStamp: serverTimestamp()
        });
        setInput('');
    };

    return <div className='messenger' ref={scroll}>
        <img src={logo} alt='messenger' className='messenger__logo'/>
        <form className='messenger__form'>
            <FormControl className='messenger__formControl'>
                <input ref={inputRef} className='messenger__input' value={input} onChange={e => setInput(e.target.value)} placeholder='Enter Message'/>
                <IconButton  className='messenger__send' type='submit' variant='contained' color='primary' disabled={!input} onClick={sendMessages}>
                    <SendIcon/>
                </IconButton>
            </FormControl>
        </form>
        <Messages userName={userName}/>
    </div>
};

export default Messenger;