import { useContext, useState } from 'react';
import { Dialog, makeStyles, withStyles, Box } from '@material-ui/core';

import { UserContext } from '../../../context/UserProvider';

//components

import Menu from '../../chat/menu/Menu';

import ChatBox from '../../chat/chat/ChatBox';
import EmptyChat from '../../chat/chat/EmptyChat';
import { GroupContext } from '../../../context/GroupProvider';
import GroupChatBox from '../../chat/chat/GroupComponents/GroupChatbox';

const useStyles = makeStyles({
    component: {
        display: 'flex'
    },
    leftComponent: {
        minWidth: "82vw"
    },
    rightComponent: {
        width: "82vw",
        
        height: '100%',
        borderLeft: '1px solid rgba(0, 0, 0, 0.14)'
    }
})

const style = {
    dialogPaper: {
        height: '90vh',
        width: '82vw',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        // overflow: 'hidden'
    }
};

const ChatDialog = ({ classes }) => {
    const classname = useStyles();
    const [viewgroups, setViewGroups] = useState(false);
    const { person } = useContext(UserContext);
    const { selectedgroup, allgroups }= useContext(GroupContext)
    
    return (
        <Dialog 
            open={true} 
            classes={{paper: classes.dialogPaper}} 
            BackdropProps={{style: {backgroundColor: 'unset'}}}
        >
           <Box className={classname.component}>
           {Object.keys(selectedgroup).length || Object.keys(person).length ?  
               <Box className={classname.rightComponent}>
               {
                  viewgroups
                  ? Object.keys(selectedgroup).length? <GroupChatBox/> :null
                  :
                  Object.keys(person).length  ? <ChatBox/> : null
               }
            </Box>
                :
                <Box className={classname.leftComponent}>
                <Menu viewgroups={viewgroups} setViewGroups={setViewGroups}/>
            </Box>
                
                
                
                }
        </Box>
        </Dialog>
    )
}

export default withStyles(style)(ChatDialog);