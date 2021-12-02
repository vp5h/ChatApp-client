import { useState, useEffect, useContext } from 'react';
import { Dialog } from '@material-ui/core';
import { makeStyles, Box, withStyles, Button } from '@material-ui/core';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { addUser } from '../../service/api';
import { AccountContext } from '../../context/AccountProvider';

const useStyle = makeStyles({
    component: {
        display: 'flex',
        height: '83vh',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center'
    },
    dialog: {
        padding: '56px 0 56px 56px',
    },
    
    title: {
        fontSize: 26,
        marginBottom: 25,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 300   
    },
   
})

const style = {
    dialogPaper: {
        marginTop: '12%',
        height: '91%',
        width: '60%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden'
    }
};



const LoginDialog = ({ classes }) => {
    const classname = useStyle();
    const clientId = process.env.REACT_APP_Google_auth;

    const [open, setOpen] = useState(false);

    const { account, setAccount,showloginButton, setShowloginButton, showlogoutButton, setShowlogoutButton } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        console.log('Login Success:', res.profileObj);
        setAccount(res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        await addUser(res.profileObj);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    useEffect(() => {
        setOpen(true);
    }, [])

    

    const handleClose = () => {
        setOpen(false)
    }
    const handleGuest=()=>{
           
            let Guestuser = {
                "googleId": "106163040983357473320",
                "imageUrl": "https://lh3.googleusercontent.com/a-/AOh14GgeFcrng2pQ6T8qz11J2F2PjnLQmAQ9sLU2BwYu=s96-c",
                "email": "vp5hhhhh@gmail.com",
                "name": "V_p5h",
                "givenName": "V_p5h"
            }
            setAccount(Guestuser);
            setShowloginButton(false);
            setShowlogoutButton(true);
    }

    return (
        <Dialog onClose={handleClose}
            open={true}
            classes={{paper: classes.dialogPaper}} 
            BackdropProps={{style: {backgroundColor: 'unset'}}}
        >
            <Box className={classname.component}>
            
                <Box >
                    <h2 style={{justifyContent: 'center', display: 'flex' ,color:"#525252"}}>ChatApp</h2>
                    
                    <div style={{justifyContent: 'center', display: 'flex'}} >
                        { showloginButton ?
                            <GoogleLogin
                                clientId={clientId}
                                buttonText="Sign In with Google"
                                onSuccess={onLoginSuccess}
                                onFailure={onLoginFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                            /> : null}

                        { showlogoutButton ?
                            <GoogleLogout
                                clientId={clientId}
                                buttonText=""
                                onLogoutSuccess={onSignoutSuccess}
                            >
                            </GoogleLogout> : null
                        }

                    </div>
                    <Box >
                        <div style={{justifyContent: 'center', display: 'flex',  padding: "3vh", marginTop:"2vh"}}>
                        <Button variant="contained" onClick={handleGuest}>Guest login</Button>
                        </div>
                        </Box>
                    <div style={{justifyContent: 'center', display: 'flex', padding: "2vh", marginTop:"2vh"}}>
                            Log In to Converse with the World
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", padding: "1vh", marginBottom:"2vh"}} >Made by Pravesh</div>

                    <footer className="footer" style={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>



                    <div className="footer-header" style={{ display: "flex", justifyContent: "center", paddingTop: "1vh"}} >Socials</div>
                    <ul style={{ display: "flex", justifyContent: "space-around", margin: '0', padding: '0'}}>
                        <li className="list-item-inline" style={{ display: "inline", padding: "2vh"}}>
                            <a className="link" href="https://github.com/vp5h">
                            <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li className="list-item-inline" style={{ display: "inline", padding: "2vh"}}>
                            <a className="link" href="https://twitter.com/v_p5h">
                            <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li className="list-item-inline"style={{ display: "inline", padding: "2vh"}}>
                            <a className="link" href="https://www.linkedin.com/in/vp5h/">
                            <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        
                    </ul>
                    </footer>


                </Box>
            </Box>
        </Dialog>
    )
}

export default withStyles(style)(LoginDialog);