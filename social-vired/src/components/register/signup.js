import React from 'react';
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Signup = () => {
  const paperStyle = {
    padding: 20,
    width: 300,
    margin: '0 auto',
    backgroundColor: '#FFE3A9',
  };
  const headerStyle = { margin: 0, };
  const avatarStyle = { backgroundColor: '#FF5D5D' };
  const btnstyle = { margin: '9px 0', backgroundColor: '#FF5D5D' };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid><br />
        <form>
          <TextField fullWidth label="Name" required placeholder="Enter your name" /> <br /> <br/>
          <TextField fullWidth label="Email" required placeholder="Enter your email" /> <br /> <br />
          {/* <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: 'initial' }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl> <br/> */}
          <TextField
            fullWidth
            label="Phone Number"
            required
            placeholder="Enter your phone number"
          /> <br/><br/>
          <TextField
            fullWidth
            label="Password"
            required
            placeholder="Enter your password"
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            required
            label="I accept the terms and conditions."
          />
          <Button type="submit" variant="contained" fullWidth style={btnstyle}>
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
