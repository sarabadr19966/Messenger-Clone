import React, {useState , useRef, useEffect} from 'react';
import Messages from './Messages/Messages';
import logo from '../images/messenger-logo.png';
import { collection, addDoc, serverTimestamp,  } from 'firebase/firestore/lite';
import db from './Apis/firebase';
import './Messenger.css';
import { FormControl } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
const Messenger = () => {
    const [userName, setUserName] = useState('');
    const [input, setInput] = useState('');
    const scroll = useRef(null);   

    useEffect(() => {
        setUserName(prompt('please enter your name'));
        scroll.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    },[])

    const sendMessages = (e) => {
        e.preventDefault();
        addDoc(collection(db, "messages"), {
            message: input,
            userName: userName,
            timeStamp: serverTimestamp()
        })
        
        setInput('');
        scroll.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        });
    }

    return <div className='messenger' ref={scroll}>
        <img src={logo} alt='messenger' style={{width: '100px', height: '100px'}}/>
        <form className='messenger__form'>
            <FormControl className='messenger__formControl'>
                <input className='messenger__input' value={input} onChange={e => setInput(e.target.value)} placeholder='Enter Message'/>
                <IconButton  className='messenger__send' type='submit' variant='contained' color='primary' disabled={!input} onClick={sendMessages}>
                    <SendIcon/>
                </IconButton>
            </FormControl>
        </form>
        <Messages userName={userName}/>
    </div>
};

export default Messenger;