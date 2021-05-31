
import React,{useState} from 'react';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { AppBar, Toolbar } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        background:'#D12326',
        color:'#FFF'

      },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: "#FFFFFF",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    background:'#D12326',
    margin: theme.spacing(3, 0, 2),
    "&:hover": {
      backgroundColor: "#D12326",
      color: "#FFFFFF",
    },
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh'
  },
  textfield:{
    color: "#FFF",
  },
  bgcolor:{
    background:"#FFF"
  },
  myclass:{
    color: "#D12326",
    paddingTop:10
  }
}));

const UserDetailsForm =()=> {
  const classes = useStyles();
  const[fname, setFirstName]=useState("")
  const[fnameErr, setFirstNameErr]=useState("")
  const[lname, setLastName]=useState("")
  const[lnameErr, setLastNameErr]=useState("")
  const[email, setEmail]=useState("test@gmail.com")
  const[emailErr, setEmailErr]=useState("") 
  const[phone_no, setPhoneNumber]=useState("+911111111111")
  const[phone_noErr, setPhoneNumberErr]=useState("")

  const handleSubmit = (e) => {
        
    const isValid = formValidation();
    if(isValid == true  ){
        axios.post(
            ` https://r9exivt701.execute-api.us-west-2.amazonaws.com/dev/at-user/employee-reg`,
          {
            "first_name":fname,
            "last_name":lname,
            "email":email,
            "phone_no":phone_no,
            },
          )
          .then(res=>{
              console.log(res)
             
            if(res.data.code===200){
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                console.log("SAVED SUCCESSFULLY")
                // toast.success("SAVED SUCCESSFULLY", { autoClose: 4000 });
               
            }else if(res.data.code===500){
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                console.log("INTERNAL SERVER ERROR")
                // toast.warn("INTERNAL SERVER ERROR", { autoClose: 4000 });
            }
            else{
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                console.log("SOMETHING WENT WRONG")
                // toast.warn("SOMETHING WENT WRONG", { autoClose: 4000 });
            }
          })
          .catch(err=>{
              console.log(err)
          })
    }
  }
  const formValidation = () =>{
    const lnameErr = {};
    const fnameErr = {};
    const emailErr = {};
    const phone_noErr = {};
    let isValid = true;

        const re =/^[A-Za-z]+$/;
                 
        if(!re.test(fname)){
            isValid = false;
            fnameErr.firstNameShort = "Please enter only Alphabates"
        }
        else if(fname.length < 3 ){
          isValid = false;
          fnameErr.firstNameShort = "First name is too short"
      }

        if(!re.test(lname)){
            isValid = false;
            lnameErr.lastNameShort = "Please enter only Alphabates"
        }
        else if(lname.length < 3 ){
          isValid = false;
          lnameErr.lastNameShort = "Last name is too short"
      }
      
    
    

      setFirstNameErr(fnameErr);
      setLastNameErr(lnameErr);
      setEmailErr(emailErr);
      setPhoneNumberErr(phone_noErr);

      return isValid;
}
  return (
      <div className={classes.image}>
    <AppBar position="absolute" color="default" className={classes.appBar}>
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
      Oxcytech System
      </Typography>
    </Toolbar>
  </AppBar>
    <Container component="div" maxWidth="xs" className={classes.bgcolor}>
      <CssBaseline />
     
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.myclass}>
        Enter User Details
        </Typography>
        <form className={classes.form} onSubmit={(e) => {
                              e.preventDefault();
                              handleSubmit();
                            }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
           
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                className={classes.textfield}
                onChange={(e) => setFirstName(e.target.value)}
              />
          
                {/* {Object.keys(fnameErr).map((key)=>{                              
        return <div style={{color:"red", fontSize:"11px"}}>{fnameErr[key]}</div> */}
            </Grid>
            <Grid item xs={12} sm={6}>
                {/* <div> */}
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                className={classes.textfield}
                onChange={(e) => setLastName(e.target.value)}
              />
               {/* {Object.keys(lnameErr).map((key)=>{
                                  
                                  return <div style={{color:"red", fontSize:"11px"}}>{lnameErr[key]}</div>
                                  </div> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                className={classes.textfield}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="number"
                label="Phone Number"
                type="number"
                id="number"
                className={classes.textfield}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
     Creat User
          </Button>
        </form>
      </div>
    </Container>
    </div>
  );
}
export default  UserDetailsForm