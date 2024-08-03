import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar sx={{height: '5vh',  backgroundColor: 'background.paper'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Box sx={{ flex: 0.75, display: 'flex', justifyContent: 'center' }}>
                    <IconButton
                    size="large"
                    color="inherit"
                    sx={{fontFamily: 'Patrick Hand, Arial, sans-serif'}}
                    style={{marginRight: 500}}
                    href='/'
                    >
                    H M
                    </IconButton>
                </Box>

                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Button color="inherit" href='/#/about_me' sx={{fontSize: '20px'}}>About Me</Button>
                    <Button color="inherit" href='/#/work_experience' sx={{fontSize: '20px'}}>Work Experience</Button>
                    <Button color="inherit" href='/#/education' sx={{fontSize: '20px'}}>Education</Button>
                    <Button color="inherit" href='/#/projects' sx={{fontSize: '20px'}}>Projects</Button>
                    <Button color="inherit" href='/#/contact' sx={{fontSize: '20px'}}>Contact</Button>
                </Box>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
