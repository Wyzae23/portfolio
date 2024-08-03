import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/theme/theme';
import ButtonAppBar from './components/navbar/navbar';
import HomePage from './components/home_page/home_page';
import AboutMePage from './components/about_me_page/about_me_page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box'; // Import Box from Material-UI
import background_photo from '../src/images/bg.jpg'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${background_photo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        }}
      >
        <ButtonAppBar />
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/about_me" element={<AboutMePage />} />
          </Routes>
        </BrowserRouter>
        {/* <SocialLinksBar /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
