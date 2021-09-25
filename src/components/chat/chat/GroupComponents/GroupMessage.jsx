import { useContext } from 'react';

import { Box, makeStyles, Typography } from '@material-ui/core';
import { AccountContext } from '../../../../context/AccountProvider'

import { UserContext } from '../../../../context/UserProvider';


const useStyles = makeStyles({
    wrapper: {
        background: '#FFFFFF',
        padding: 5,
        maxWidth: '60%',
        width: 'fit-content',
        display: 'flex',
        borderRadius: 10,
        wordBreak: 'break-word',
        flexDirection: 'column'
        
    },
    own: {
        background: '#dcf8c6',
        padding: 5,
        maxWidth: '60%',
        width: 'fit-content',
        marginLeft: 'auto',
        display: 'flex',
        borderRadius: 10,
        wordBreak: 'break-word',
        flexDirection: 'column'
    },
    name: {
        alignContent:'flex-start',
        fontSize: 14,
        fontWeight: 'bold',
        padding: '0 10px 0 5px',
        marginBottom: 5,
        color: "Blue"
    },
    text: {
        fontSize: 14,
        padding: '0 25px 0 5px'
    },
    time: {
        padding: '0 10px 0 5px',
        fontSize: 10,
        color: '#919191',
       
        wordBreak: 'keep-all',
        marginTop: 'auto'
    }
})

const GroupMessage = ({ message }) => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);
  
    const { allusers } = useContext(UserContext);

    const formatDate = (date) => {
        return date < 10 ? '0' + date : date;
    }

    return (
        <Box className={account.googleId === message.sender ? classes.own : classes.wrapper}>
             <Typography className={classes.name}>
  
           
              {account.googleId === message.sender? "You" :allusers.find(user => user.googleId === message.sender).name }
           

            
            </Typography>
            <Typography className={classes.text}>{message.text}</Typography>
            <Typography className={classes.time}>
                {formatDate(new Date(message.createdAt).getHours())}:{formatDate(new Date(message.createdAt).getMinutes())}
            </Typography>
        </Box>
    )
}

export default GroupMessage;