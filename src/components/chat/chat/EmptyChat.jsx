
import { Box, makeStyles, Typography, Divider } from '@material-ui/core';
import { findByLabelText } from '@testing-library/dom';

const useStyle = makeStyles(theme => ({
    component: {
        display: "flex",
        background: '#f8f9fa',
        padding: '50px 0',
        textAlign: 'center',
        height: '70vh',
        width:"auto",
        overflowX: "hidden"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: 'center',
        padding: '0 200px',
        [theme.breakpoints.down('sm')]: {
            padding: -0
        }
    },
    image: {
        width: 320
    },
    title: {
      
        fontSize: 36,
        fontWeight: 300,
        color: '#525252',
        marginTop: 25
    },
    subTitle: {
        marginTop: 10,
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.45)'
    },
    divider: {
        margin: '30px 0'
    }
}));

const EmptyChat = () => {
    const classes = useStyle();
    // const url = 'https://image.shutterstock.com/image-vector/mobile-apps-pattern-musicchatgalleryspeaking-bubbleemailmagnifying-260nw-249638665.jpg';

    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                {/* <img src={url} alt="dp" className={classes.image} /> */}
                <Typography className={classes.title}>Hi 👋 from ChatApp</Typography>
                <Typography className={classes.subTitle}>ChatApp connects you to People via One to one Chats and Group Chats
                </Typography>
                <Divider className={classes.divider} />
            </Box>
        </Box>
    )
}

export default EmptyChat;