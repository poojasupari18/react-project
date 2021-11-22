import React, {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link} from "react-router-dom";
import { Context } from '../Context/UserContext';
// import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  const { state } = useContext(Context);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Project
          </Typography>
          {state && state.profile ? 
          <>
            <Link style={{ marginRight: "2em", textDecoration: 'none', color: 'white'}} to = "/users" >Users</Link>
            {state.profile.name}
            </>
          :
          <Link style={{ textDecoration: 'none', color: 'white'}} to = "/login" >Login</Link>
          }
         
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
