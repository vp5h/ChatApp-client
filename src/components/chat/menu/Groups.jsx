import { Box, makeStyles } from '@material-ui/core'
import React, {useContext, useState,useEffect} from 'react'
import { getGroups } from '../../../service/api'
import { AccountContext } from '../../../context/AccountProvider';
import { GroupContext } from '../../../context/GroupProvider';
import { Group } from './Group';
import { getUsers } from '../../../service/api';
import { UserContext } from '../../../context/UserProvider';

const useStyles = makeStyles({
    component: {
        overflow: 'overlay',
        height: '72vh'
    },
    divider: {
        margin: '0 0 0 67px',
        backgroundColor: '#F2F2F2'
    }
})

export default function Groups({text}) {
    const classes = useStyles();
    const [groups, setGroups] = useState("")
    const { account } = useContext(AccountContext);
    const { setAllgroups, allgroups } = useContext(GroupContext);
    const { allusers, setAllusers } = useContext(UserContext);
    
    useEffect(() => {
        const fetchData = async () => {
            let data = await getGroups({sender: account.googleId});
            let datausers= await getUsers()
            setAllgroups(data)
            setAllusers(datausers)
            
            let fiteredData = data.filter(groups => groups.gname.toLowerCase().includes(text.toLowerCase()));
            setGroups(fiteredData);
        }
        fetchData();
    }, [text]);

   
    
  
    return (
        <Box className={classes.component}>

           {Object.keys(groups).map((index )=>{
                return(
                <> 
                <Group group={groups[index]}/>
                
                </>
                )
            })}
        </Box>
    )
}
