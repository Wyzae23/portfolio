import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/theme/theme';
import ButtonAppBar from './components/navbar/navbar';
import HomePage from './components/home_page/home_page';
import AboutMePage from './components/about_me_page/about_me_page';
import { HashRouter, Routes, Route } from 'react-router-dom'; // Import HashRouter instead of BrowserRouter
import Box from '@mui/material/Box'; // Import Box from Material-UI
import background_photo from '../src/images/bg.jpg';

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
        <HashRouter> {/* Use HashRouter here */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about_me" element={<AboutMePage />} />
          </Routes>
        </HashRouter>
        {/* <SocialLinksBar /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
