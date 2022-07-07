import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchBar from './SearchBar';

  
  function Navbar({ search, setSearch }) {
    return (
      <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MY FIT
          </Typography>
          <Box>
            <Button variant="" to="/" component={ Link }>Home</Button>
            <Button variant="" to="/login" component={ Link }>Login</Button>
            <Button variant="" to="/signup" component={ Link }>Sign Up</Button>
          </Box>
          <SearchBar search={search} setSearch={setSearch}/>
          </Toolbar>
        </AppBar>
      </Box>
      </div>
    );
  }
  

export default Navbar;