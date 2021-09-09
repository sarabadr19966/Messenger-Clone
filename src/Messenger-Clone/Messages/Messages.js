import React, { useState, useEffect, useRef } from 'react';
import Message from './Message/Message';
import { collection, getDocs,orderBy, query, addDoc, serverTimestamp,  } from 'firebase/firestore/lite';
import db from '../Apis/firebase';
import FlipMove from 'react-flip-move';
import './Messages.css';
import { FormControl } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';



const Messages = () => {
    const [messages ,setMessages] = useState([]);
    const [userName, setUserName] = useState('');
    const [input, setInput] = useState('');
    const [docss, setDocss] = useState([]);
    const scroll = useRef(null);

    useEffect(() => {
        setUserName(prompt('please enter your name'));
    },[])

    useEffect(() => {
        // get messages from firebase & set it to the state
        const messagesCol = collection(db, 'messages');
        const q = query(messagesCol, orderBy("timeStamp", "asec"));
        getDocs(q)
        .then(documents=>{
            setDocss(document)
            setMessages(documents.docs.map(doc =>({id: doc.id,message: doc.data()})));
            scroll.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            });
        })
        .catch(err=>console.log(err));    
    },[docss])

    const sendMessages = (e) => {
        e.preventDefault();
        addDoc(collection(db, "messages"), {
            message: input,
            userName: userName,
            timeStamp: serverTimestamp()
        })
        setInput('');
    }

    return <div className='messages' ref={scroll}> 


    <form className='messages__form'>
    <FormControl className='messages__formControl'>
        <input className='messages__input' value={input} onChange={e => setInput(e.target.value)} placeholder='Enter Message'/>
        <IconButton  className='messages__send' type='submit' variant='contained' color='primary' disabled={!input} onClick={sendMessages}>
            <SendIcon/>
        </IconButton>

    </FormControl>
    </form>
        <FlipMove>
            {messages.map(data => {
            return <Message key={data.id} message={data.message} userName={userName}/>
            })}
        </FlipMove>
      
    </div>
}

export default Messages;