import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: 'Patrick Hand, Arial, sans-serif',
    },
    palette: {
        mode: 'dark', // This enables dark mode
        primary: {
        main: '#bb86fc', // Light purple
        },
        secondary: {
        main: '#03dac6', // Teal
        },
        background: {
        default: '#121212', // Dark background
        paper: '#1e1e1e', // Slightly lighter background for paper elements
        },
        text: {
        primary: '#e0e0e0', // Light text color
        secondary: '#a0a0a0', // Slightly dimmer text color
        },
        border: {
        main: '#333', // Border color
        },
    },
});
