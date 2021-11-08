import { useContext, useState } from 'react';
import { Dialog, makeStyles, withStyles, Box } from '@material-ui/core';

import { UserContext } from '../../context/UserProvider';

//components
import Menu from './menu/Menu';
import ChatBox from './chat/ChatBox';
import EmptyChat from './chat/EmptyChat';
import { GroupContext } from '../../context/GroupProvider';
import GroupChatBox from './chat/GroupComponents/GroupChatbox';

const useStyles = makeStyles({
    component: {
        display: 'flex',
     
    },
    leftComponent: {
        minWidth: 380
    },
    rightComponent: {
        width: '70%',
        minWidth: 300,
        height: '100%',
        borderLeft: '1px solid rgba(0, 0, 0, 0.14)'
    }
})

const style = {
    dialogPaper: {
        
        height: '90vh',
        width: '80vw',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        // overflow: 'overlay',
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
                <Box className={classname.leftComponent}>
                    <Menu viewgroups={viewgroups} setViewGroups={setViewGroups}/>
                </Box>
                <Box className={classname.rightComponent}>
                    {
                       viewgroups
                       ? Object.keys(selectedgroup).length? <GroupChatBox/> :<EmptyChat/>
                       :
                       Object.keys(person).length  ? <ChatBox/> : <EmptyChat />
                    }
                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(style)(ChatDialog);