
import { AppBar, Toolbar, makeStyles, Box,  } from '@material-ui/core';
import React, {useContext} from 'react'
import { AccountContext } from '../../context/AccountProvider';

//components
import ChatDialog from '.././chat/ChatDialog';
import MobChatDialog from './Mobcomponets/MobChatDialog';
import LoginDialog from '.././account/LoginDialog';

const useStyles = makeStyles({
    component: {
        height: '100vh',
        background: '#DCDCDC'
    },
    componentmob: {
        height: '1vh',
        background: '#DCDCDC'
    },
    header: {
        background: '#128C7E',
        height: 115,
        boxShadow: 'none'
    },
    loginHeader: {
        background: '#00bfa5',
        height: 200,
        boxShadow: 'none'
    },
    mobmes:{
        padding: '2vw',
       
        display: "flex",
        margin: '48vh 17vh',
        zIndex: '5',
        leftComponent: {
            minWidth: '80vw'
        },

    }
})


const Mobilehome = () => {
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    return (
        <>    
        <Box className={classes.mobmes}>
         <AppBar className={account ? classes.header : classes.loginHeader}>
        </AppBar>
        {
            account ? <MobChatDialog /> : <LoginDialog />
        }
        </Box>
    </>
    )
}

export default Mobilehome
