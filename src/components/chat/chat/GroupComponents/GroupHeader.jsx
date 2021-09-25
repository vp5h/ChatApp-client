/* eslint-disable jsx-a11y/img-redundant-alt */
import { useContext } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { Search, MoreVert } from '@material-ui/icons';
import { UserContext } from '../../../../context/UserProvider';
import { AccountContext } from '../../../../context/AccountProvider';

const useStyles = makeStyles({
    header: {
        height: 35,
        background: '#ededed',
        display: 'flex',
        padding: '10px 16px',
        alignItems: 'center'
    },
    displayPicture: {
        width: 37,
        height: 37,
        objectFit: 'cover',
        borderRadius: '50%',
        padding: '0 2px'
    },
    name: {
        marginLeft: 10
    },
    rightContainer: {
        marginLeft: 'auto',
        '& > *': {
            padding: 8,
            fontSize: 22,
            color: '#919191'
        }
    },
    status: {
        fontSize: 12,
        color: 'rgb(0, 0, 0, 0.6)',
        marginLeft: 10
    }
});

const GroupHeader = ({ group }) => {
    const classes = useStyles();    

    const url =  'https://www.kindpng.com/picc/m/80-800289_men-users-people-community-team-group-comments-icon.png';
    const {allusers}= useContext(UserContext)
    const { activeUsers } = useContext(AccountContext);

    console.log(activeUsers, "Socket");

    return (
        <Box className={classes.header}>
            <img src={url} alt="display picture"  className={classes.displayPicture} />     
            <Box>
                <Typography className={classes.name}>{group.groupname}</Typography>   
                <Typography className={classes.status}>
                    {/* {activeUsers?.find(user => user.userId === person.googleId) ? 'Online' : 'Offline'} */}
                  
                  {group.members && (group.members).map((members, index) => {
                   

                        return(
                   allusers.find(user => user.googleId === members).name + ", "
                   )
                     
                    
                 })}

                 
                </Typography>    
            </Box>   
            <Box className={classes.rightContainer}>
                <Search />
                <MoreVert />    
            </Box> 
        </Box>
    )
}

export default GroupHeader;