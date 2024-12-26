import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, boxShadow: 2 }}>
      <AppBar position="static" sx={{backgroundColor: "white"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="dark"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
            Animals
          </Typography>
          <Button color="inherit" sx={{color: "black"}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
