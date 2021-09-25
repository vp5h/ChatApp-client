import { useContext, useEffect, useState } from 'react'
import { makeStyles, Box, Typography } from "@material-ui/core";

import { GroupContext } from '../../../context/GroupProvider';
import { AccountContext } from '../../../context/AccountProvider';


import { setGroup, getGroups } from '../../../service/api';

const useStyles = makeStyles({
    component: {
        
           
        
        height: 40,
        display: 'flex',
        padding: '13px 0',
        cursor: 'pointer'
    },
    displayPicture: {
        width: 50,
        height: 50,
        objectFit: 'cover',
        borderRadius: '50%',
        padding: '0 14px'
    },
    container: {
        display: 'flex'
    },
    timestamp: {
        fontSize: 12,
        marginLeft: 'auto',
        color: '#00000099',
        marginRight: 20
    },
    text: {
        display: 'block',
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: 14
    }
})

export const Group = ({group})=>{
    const classes = useStyles();
    const url = 'https://www.kindpng.com/picc/m/80-800289_men-users-people-community-team-group-comments-icon.png';

    const { selectedgroup, setSelectedgroup } = useContext(GroupContext);
    const { account }  = useContext(AccountContext);

    //setGroups with forms to be handled

    const handleGroup = () => {
        setSelectedgroup(group);
        console.log(selectedgroup)
       
    }

    const getTime = (time) => {
        return time < 10 ? '0' + time : time; 
    } 

    return (
        <Box className={classes.component} onClick={() => setSelectedgroup({groupname: group.gname, groupId: group._id, members: group.members, info: group.info})}>
            <Box>
                <img src={url} alt="display picture" className={classes.displayPicture} />
            </Box>
            <Box style={{width: '100%'}}>
                <Box className={classes.container}>
                    <Typography>{group.gname}</Typography>
                    {/* { 
                        message.text && 
                        <Typography className={classes.timestamp}>
                            {getTime(new Date(message.timestamp).getHours())}:{getTime(new Date(message.timestamp).getMinutes())}
                        </Typography>        
                    } */}
                </Box>
                <Box>
                    {/* <Typography className={classes.text}>{message.text}</Typography> */}
                </Box>
            </Box>
        </Box>
    )
}