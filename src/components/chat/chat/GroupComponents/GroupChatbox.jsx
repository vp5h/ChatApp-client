import { useContext, useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { GroupContext } from '../../../../context/GroupProvider';
import { UserContext } from '../../../../context/UserProvider';
import { AccountContext } from '../../../../context/AccountProvider';
import { getConversation, newMessages } from '../../../../service/api';

//components
import GroupHeader from './GroupHeader'
import GroupMessages from './GroupMessages';


const GroupChatBox = () => {
    const { selectedgroup } = useContext(GroupContext);
    const { account } = useContext(AccountContext);

   
    
    // useEffect(() => {
    //     const getConversationDetails = async () => {
    //         let data = await getConversation({ sender: account.googleId, receiver: person.googleId });
    //         setConversation(data);
    //     }
    //     getConversationDetails();
    // }, [person.googleId]);

    return (
        <Box style={{height: '75%'}}> 
            <GroupHeader group={selectedgroup} />
            <GroupMessages group={selectedgroup}  />
        </Box>
    )
}

export default GroupChatBox;