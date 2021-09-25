import { useContext, useState, useEffect } from "react";
import { Box, makeStyles, Typography, InputBase, Select, Button } from "@material-ui/core"

import InputLabel from "@material-ui/core/InputLabel";

import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";
import { getUsers, setGroup } from "../../service/api";


const CreateGroup = () => {

    const { account } = useContext(AccountContext);
    const [options, setOptions] = useState([])
    const [selected, setSelected] = useState([]);
    const [groupname, setGroupName]= useState("")
    const [selectedIds, setSelectedIds] = useState([]);
    const { allusers, setAllusers } = useContext(UserContext)
    const [message, setmessage]= useState("")

    // console.log(allusers)
// var options = allusers && allusers.find(user=> user.googleId !== account.googleId)
// console.log(options)


useEffect(() => {
    const fetchData = async () => {
       
        let datausers= await getUsers()
       
        setAllusers(datausers)
        let fiteredData = datausers.filter(user=> user.googleId !== account.googleId);
            setOptions(fiteredData);
        
    }
    fetchData();
}, []);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center"
  },
  variant: "menu"
};


const useStyle = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      width: 300
    },
    indeterminateColor: {
      color: "#f50057"
    },
    selectAllText: {
      fontWeight: 500
    },
    selectedAll: {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.08)"
      }
    }
  }));




const useStyles = makeStyles({

    wrapper:{
        marginTop: "15vh"
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    profilePicture: {
        width: 200,
        height: 200,
        borderRadius: '50%',
        padding: '18px 0'
    },
    nameContainer: {
        
        background: '#FFFFFF',
        padding: '12px 30px 2px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        '& :first-child': {
            
            fontSize: 14   ,
            color:'#009688' 
        },
        '& :last-child': {
            margin: '14px 0',
            color: '#4A4A4A'
        }
    },
    description: {
        padding: '10px 20px 28px 30px',
        '& > *': {
            color: 'rgba(0, 0, 0, 0.45)',
            fontSize: 12
        }
    }
})


function Multiselect(){
    const classes = useStyle();

const handleChange = (event) => {
  const value = event.target.value;
  const ids = event.target.ids
  setSelectedIds(ids)
  setSelected(value);
  console.log(selected)
  console.log(selectedIds)
};





return (
    <>
  <FormControl className={classes.formControl}>
   
   
   
    <InputLabel id="mutiple-select-label">Multiple Select</InputLabel>
    
    <Select
      labelId="mutiple-select-label"
      multiple
      value={selected}
      
      onChange={handleChange}
      renderValue={(selected) => selected.join(", ") }
      
      MenuProps={MenuProps}
    >
      
      {options.map((option) => (
        <MenuItem key={option} value={option.name} >
          
          <ListItemText primary={option.name} />
        </MenuItem>
      ))}
    </Select>
   
  </FormControl>


  </>
);
}


    function handleSubmit(){


        console.log(selected)
        let arr = []
        selected.map(sel => { 
            for(let i=0; i< allusers.length; i++){
                if(allusers[i].name === sel){
                        arr.push(allusers[i].googleId)
                        
                }
            }
        })
        if( groupname.trim().length !== 0  && arr.length>0){
        setGroup({
            creatorId: account.googleId,
            memberIds: String(arr),
            name: groupname

        })
        setmessage("Group Created, Do Check the Group Tab")
    


    }else{
        setmessage("Plz Reconsider Your Choices")
    }
    
    }
    const classes = useStyles();

   
    return (
        <>
        <Box className={classes.wrapper}>
            
        {message ? <Box className={classes.description}>
                <Typography>{message}</Typography>
            </Box>: <Box className={classes.description}>
                <Typography>{message}</Typography>
            </Box>}
            <Box className={classes.nameContainer}>
                <Typography>Group Name </Typography>




                <InputBase
                    placeholder="Name the Group"
                    onChange={(e)=> setGroupName(e.target.value)}
                    inputProps={{ 'aria-label': 'search' }}
                
                   
                />
                
            </Box>
            <Box className={classes.description}>
                <Typography>Select Users from Dropdown Below</Typography>
            </Box>
            <Box className={classes.nameContainer}>
                <Typography>Users</Typography>
                <Multiselect/>
                <Button type="submit" onClick={handleSubmit}>Make Group</Button>
            </Box>
            </Box>
        </>
    )
}

export default CreateGroup;