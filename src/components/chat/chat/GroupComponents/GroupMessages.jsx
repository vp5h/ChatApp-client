import { useState, useEffect, useContext, useRef } from 'react';
import { Box, makeStyles } from '@material-ui/core';

import { io } from 'socket.io-client';

import { getGMessages, newGMessages } from '../../../../service/api';
import { AccountContext } from '../../../../context/AccountProvider';
import { selctedgroup } from '../../../../context/GroupProvider';

//components
import GroupMessage from './GroupMessage';
import GroupFooter from './GroupFooter';

const useStyles = makeStyles({
    wrapper: {
        backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
        // height: 'calc(100% - 114px)',
        backgroundSize: '50%'
    },
    footer: {
        height: '55px',
        background: '#ededed',
        // position: 'absolute',
        width: '100%',
        // bottom: 0
    },
    component: {
        height: 'calc(90vh - 110px)',
        overflowY: 'scroll'
    },
    container: {
        padding: '0.5vh 2vw'
    }
})


const GroupMessages = ({ group }) => {
    const classes = useStyles();

    const [messages, setMessages] = useState([]);
    const [incomingMessage, setIncomingMessage] = useState(null);
    const [value, setValue] = useState();

    const scrollRef = useRef();

    const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);

    useEffect(() => {
        
        socket.current.on('getGMMessage', data => {

            console.log(data)
            setIncomingMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            })
        })
    }, []);
    
    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getGMessages(group.groupId);
            setMessages(data);
        }
        getMessageDetails();
    }, [group?.groupId, newMessageFlag]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [messages]);

    useEffect(() => {
        incomingMessage && group?.members?.includes(incomingMessage.sender) && 
            setMessages((prev) => [...prev, incomingMessage]);
        
    }, [incomingMessage, group]);

    const receiverId = group?.members?.filter(member => member !== account.googleId);
    
    const sendText = async (e) => {
        let code = e.keyCode || e.which;
        if(!value) return;

        if(code === 13) { 
            let message = {
                sender: account.googleId,
                groupId: group.groupId,
                text: value
            };

            socket.current.emit('sendGMessage', {
                senderId: account.googleId,
                receiverId,
                text: value
            })

            await newGMessages(message);

            setValue('');
            setNewMessageFlag(prev => !prev);
        } 
    }

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.component}>
                {
                    messages && messages.map(message => (
                        <Box className={classes.container} ref={scrollRef}>
                            <GroupMessage message={message} />
                        </Box>
                    ))
                }
            </Box>
            <GroupFooter sendText={sendText} value={value} setValue={setValue} />
        </Box>
    )
}

export default GroupMessages;