import { useState } from 'react';
import { Box, Button, makeStyles } from '@material-ui/core';
import {Add } from '@material-ui/icons';
//components
import Header from './Header';
import Search from './Search';
import Conversations from './Conversations';
import Groups from './Groups'

const useStyles = makeStyles({
    menu :{
        display: 'flex',
        justifyContent: "space-around",
        height: 29
        

    }
})

const Menu = ({viewgroups, setViewGroups}) => {
    const [text, setText] = useState('');
    const classes = useStyles();
    return (
        <Box>
            <Box>
                <Header/>
                <Search setText={setText} />
                <Box className={classes.menu}>
                    <Button onClick={()=>(setViewGroups(false))}>Chats</Button>
                    <Button onClick={()=>(setViewGroups(true))}>Groups</Button>
                    
                </Box> 
              {  viewgroups? <Groups text={text} />:<Conversations text={text} /> }
              {/* <Conversations text={text}/> */}
            </Box>
        </Box>
    )
}

export default Menu;