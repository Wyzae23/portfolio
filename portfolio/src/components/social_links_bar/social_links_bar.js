import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { LinkedIn, GitHub, School } from '@mui/icons-material';

export default function SocialLinksBar() {
  return (
    <Box sx={{ flex: 1, justifyContent: 'center' }}>
      <Box sx={{ maxWidth: '25vw', margin: '0 auto' }}> {/* Adjust the maxWidth as needed */}
        <AppBar position="relative" sx={{ color: 'inherit', borderRadius: '100px', backgroundColor: 'background.default' }}>
          <Toolbar sx={{ height: '5vh' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', maxWidth: '50vw' }}>
                <IconButton
                  href='https://www.linkedin.com/in/harold-mo/'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn sx={{ height: '5vh', width: '5vh' }} />
                </IconButton>

                <IconButton
                  href='https://github.com/Wyzae23'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub sx={{ height: '5vh', width: '5vh' }} />
                </IconButton>

                <IconButton
                  href='https://www.example.com'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <School sx={{ height: '5vh', width: '5vh' }} />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
}
