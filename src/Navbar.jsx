import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

  
  function Navbar() {
    return (
      <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MY FIT
          </Typography>
          <Box>
            <Button variant="">Home</Button>
            <Button variant="">Login</Button>
            <Button variant="">Sign Up</Button>
          </Box>
          </Toolbar>
        </AppBar>
      </Box>
      </div>
    );
  }
  

export default Navbar;