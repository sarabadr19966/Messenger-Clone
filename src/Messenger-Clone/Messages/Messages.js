import React, { useState, useEffect,} from 'react';
import Message from './Message/Message';
import { collection, getDocs,orderBy, query, } from 'firebase/firestore/lite';
import db from '../Apis/firebase';
import FlipMove from 'react-flip-move';
import './Messages.css';

const Messages = ({userName}) => {
    const [messages ,setMessages] = useState([]);

    useEffect(() => {
        // get messages from firebase & set it to the state
        const messagesCol = collection(db, 'messages');
        const q = query(messagesCol, orderBy("timeStamp", "asec"));
        getDocs(q)
        .then(documents=>{
            setMessages(documents.docs.map(doc =>({id: doc.id,message: doc.data()})));

        })
        .catch(err=>console.log(err));    
    },[messages])

    return <div className='messages'> 
        <FlipMove>
            {messages.map(data => {
            return <Message key={data.id} message={data.message} userName={userName}/>
            })}
        </FlipMove>
    </div>
};

export default Messages;