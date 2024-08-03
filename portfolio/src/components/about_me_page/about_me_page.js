import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TypeWriter from '../typewriter/typewriter';
import exampleImg from '../../images/IMG_1876.jpg'; // Import the image


export default function AboutMePage() {
    const text = "Hello!\n I'm Harold, welcome to my portfolio page.\n I am a software engineer with professional\n experience in full-stack development and\n machine learning.\n Thanks for checking out my page!"

    return (
        <Box sx={{fontSize: '25px', padding: 1}}>
            <Box sx={{display: 'flex', textAlign: 'center', alignContent: 'center', justifyContent: 'center', height: '90vh'}}>
                <Box sx={{textAlign: 'center', flex:1, alignContent: 'center'}}>
                    <Typography>From: Los Angeles, CA</Typography>
                    <Typography>Current: Los Angeles, CA</Typography>
                </Box>

                <Box sx={{ flex:1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img
                        src={exampleImg}
                        alt='Example'
                        style={{ borderRadius: '8px', width: '50vh', height: '50vh' }}
                    />
                </Box>

            </Box>
        </Box>
    );
}
