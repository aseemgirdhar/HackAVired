import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
const Login = ({ handleChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `../dashboard`;
    navigate(path);
  };

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log('Email:', email, 'Password: ', password);
//     fetch('http://localhost:3001/auth', {
//       method: 'POST',
//       body: JSON.stringify(email, password),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((response) => console.log('Success:', JSON.stringify(response)))
//       .catch((error) => console.error('Error:', error));
//   }

  const paperStyle = {
    padding: 20,
    height: '100%',
    width: '300',
    margin: '0 auto',
    backgroundColor: '#FFE3A9',
  };
  const avatarStyle = { backgroundColor: '#FF5D5D' };
  const btnstyle = { margin: '9px 0', backgroundColor: '#FF5D5D' };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        {/* <div>
        <img className='form-img' src='Images/login.svg' alt='spaceship' />
        </div> */}
        <form onSubmit={routeChange}>
          <TextField
            label="Username"
            type="email"
            color="primary"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            placeholder="Enter username"
            fullWidth
            required
          />
          <br /> <br />
          <TextField
            label="Password"
            color="primary"
            type="password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" variant="contained" style={btnstyle} fullWidth>
            Sign in
          </Button>
        </form>
        <Typography align="center" style={{ paddingTop: '1vh' }}>
          <Link href="/forgotPassword">Forgot password?</Link>
        </Typography>
        <Typography style={{ padding: '2vh', cursor:'pointer' }}>
          {' '}
          Do you have an account? &nbsp;
          <Link onClick={() => handleChange('event', 1)}>Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
