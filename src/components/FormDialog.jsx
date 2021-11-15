import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import emailjs from 'emailjs-com'



const useStyles = makeStyles((theme) => ({
    root:{
      padding:"2px 0px 0px 24px",
      "& h2":{
        fontSize:"21px",
        textTransform:"none"
      },
      "& p":{
        fontSize:"21px",
      }
  }
}));




const useStylesAli = makeStyles({
  root: {
    //when no action
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#7D8483"
    },
    //name of filed
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#8ca945"
    },
    //when focesd on textFiled
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#8ca945"
    },
  }
});


const initialState = {
  name: '',
  email: '',
  message: '',
}

export default function FormDialog() {

  const [phone, setPhone] = React.useState(966);

  const [{ name, email, message }] = useState(initialState)

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(name, email, message)
      setPhone(966);
    emailjs
      .sendForm(
        'service_9he0ign', 'template_pfgid7i', e.target, 'user_hcBBNwV6ugYcXmcME444y'
      )
      .then(
        (result) => {
          console.log(result.text);
            e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      )
  }

  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const [type, setType] = React.useState('');

  function changeType(event) {
    setType(event.target.value);
  }

  const classes2 = useStylesAli();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPhone(966);
  };

  const checkNumber = (e) =>{
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
       setPhone(e.target.value);
    }
  } 

  return (
    <div>
      <Button variant="contained" style={{ background:"#8ca945",color:"#fff",fontSize:"1.3vw",fontWeight:500,textTransform:"none" }}
       onClick={handleClickOpen}>
        Test your product now
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" size="large">
        <DialogTitle id="form-dialog-title" className={classes.root}>Send Request</DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit}>
                  <DialogContentText style={{ fontSize:"15px",fontWeight:500 , color:'black'}}>
                    To <span style={{ fontWeight:"bold",color:"#8ca945" }}>Test your product</span> , please fill this form here.Then We will send updates occasionally.
                    </DialogContentText>
             
                          <Grid container spacing={1}>
                              <Grid item xs={6}>
                                  <TextField
                                  autoFocus
                                  required
                                  margin="dense"
                                  id="name"
                                  label="Name"
                                  type="name"
                                  variant="outlined"
                                  fullWidth
                                  className={classes2.root}
                                  inputProps={{style: {fontSize: 16}}}
                                  InputLabelProps={{style: {fontSize: 16}}}
                                />
                              </Grid>
                              <Grid item xs={6}>
                                <TextField
                                        required
                                        inputProps={{style: {fontSize: 16}}}
                                        InputLabelProps={{style: {fontSize: 16}}}
                                        className={classes2.root}
                                        margin="dense"
                                        id="name"
                                        label="Phone"
                                        type="Phone"
                                        value={phone}
                                        variant="outlined"
                                        fullWidth
                                        onChange={checkNumber}
                                      /> 

                              
                              </Grid>

                              <Grid item xs={6}>
                                  <TextField
                                  required
                                  style={{ borderColor:"#8ca945" }}
                                  inputProps={{style: {fontSize: 16,borderColor:"#8ca945"}}}
                                  InputLabelProps={{style: {fontSize: 16}}}
                                  className={classes2.root}
                                  margin="dense"
                                  id="name"
                                  label="Email Address"
                                  type="email"
                                  variant="outlined"
                                  fullWidth
                                />
                              </Grid>

                    
                            <Grid item xs={6}>
                                    <TextField
                                    required
                                    className={classes2.root}
                                    inputProps={{style: {fontSize: 16}}}
                                    InputLabelProps={{style: {fontSize: 16}}}
                                    margin="dense"
                                    id="name"
                                    label="Company"
                                    variant="outlined"
                                    type="name "
                                    fullWidth
                                  />
                            </Grid>


                            <Grid item xs={12}>
                                    <FormControl variant="outlined" className={classes2.root} style={{ margin:"0 auto", marginTop:10, width:"100%" }}>
                                              <Select
                                              required
                                              native
                                              value={type}
                                              onChange={changeType}
                                              label="Service"
                                              style={{ fontSize:"14.5px" }}
                                              inputProps={{
                                                  name: 'service',
                                                  id: 'outlined-age-native-simple',
                                              }}
                                              >
                                              <option value="default">-Select the service-</option>
                                              <option value="Digital Assurance">Digital Assurance</option>
                                              <option value="Quality Assurance">Quality Assurance</option>
                                              <option value="Next Generation Testing">Next Generation Testing</option>
                                              <option value="Project Management">Project Management</option>
                                              <option value="Enterprise Application Services">Enterprise Application Services</option>
                                              </Select>
                                          </FormControl>
                            </Grid>

                            <Grid item xs={12}>

                            <TextField
                                    required
                                    multiline
                                    minRows={6}
                                    maxRows={8}
                                    className={classes2.root}
                                    inputProps={{style: {fontSize: 16}}}
                                    InputLabelProps={{style: {fontSize: 16}}}
                                    margin="dense"
                                    id="name"
                                    label="How Can Aspire Technologies Help?"
                                    variant="outlined"
                                    type="name "
                                    fullWidth
                            />

                            </Grid>

                      </Grid>
   
        {/* <DialogActions> */}
          {/* <Button onClick={handleClose} style={{ fontWeight:"bold",fontSize:"13px",textTransform:"none" }}>
            Cancel
          </Button> */}
         <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
          <Button type='submit' style={{ fontWeight:"bold",color:"#8ca945",fontSize:"13px",textTransform:"none" }}>
            Send Request
          </Button>
          </Grid>
          </form>
          </DialogContent>
        {/* </DialogActions> */}
      </Dialog>
    </div>
    
  );
}
