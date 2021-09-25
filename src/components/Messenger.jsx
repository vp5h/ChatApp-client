import { useContext } from 'react';
import { AppBar, Toolbar, makeStyles, Box, useMediaQuery, Dialog, Typography } from '@material-ui/core';

import { AccountContext } from '../context/AccountProvider';

//components
import ChatDialog from './chat/ChatDialog';
import LoginDialog from './account/LoginDialog';

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
        zIndex: '5'

    }
})






const Messenger = () => {
    const matches = useMediaQuery('(min-width:800px)');
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    return (
       matches ? <Box className={classes.component}>
            <AppBar className={account ? classes.header : classes.loginHeader}>
                <Toolbar>

                </Toolbar>
            </AppBar>
            {
                account ? <ChatDialog /> : <LoginDialog />
            }
        </Box>
        : <>

<Box className={classes.componentmob}>
            <AppBar className={account ? classes.header : classes.loginHeader}>
                <Toolbar>

                </Toolbar>
            </AppBar>
            
        </Box>



        
        <Box className={classes.mobmes}>
            <Typography>


            ChatApp is made for Desktops, Mobile version Coming Soon! 
            </Typography>
        </Box>
    
    </>
    )
}

export default Messenger;