import React, { forwardRef } from 'react';
import './Message.css';
import { Card, CardContent, Typography } from '@material-ui/core';
const Message = forwardRef(({userName, message}, ref) => {
    const isUser = userName === message.userName;
    return <div ref={ref} className={`message ${isUser && 'message__user'}`}>
        <Card className={isUser? 'message__userCard' : 'message__guestCard'}>
            <CardContent>
                <Typography
                color='initial'
                variant='h5'
                component='h5'>
                    {!isUser&&`${message.userName ||'Unknown User'}:`} {message.message}
                </Typography>
            </CardContent>
        </Card>

    </div>

});

export default Message;