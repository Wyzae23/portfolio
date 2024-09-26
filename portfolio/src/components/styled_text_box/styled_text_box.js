import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Function to render text with bolded words
const renderTextWithBold = (text, boldWords) => {
  // Split the text into words
  const words = text.split(' ');
  return words.map((word, index) => {
    // Check if the word should be bolded
    const isBold = boldWords.includes(word.replace(/[^\w]/g, '')); // Remove punctuation for matching
    return (
      <Typography
        key={index}
        component="span"
        sx={{ fontWeight: isBold ? 'bold' : 'normal', fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '25px' } }}
      >
        {word}{' '}
      </Typography>
    );
  });
};

export default function StyledTypographyBox({ textLines, boldWords }) {
  return (
    <Box
      sx={{
        border: '2px solid',
        borderColor: 'primary.main',
        borderRadius: '20px',
        padding: { xs: '8px', sm: '12px', md: '16px', lg: '24px' },
        textAlign: 'start',
        width: { xs: '90vw', sm: '70vw', md: '60vw', lg: '50vw' },
        margin: '20px auto',
        backgroundColor: 'background.paper',
        color: 'text.primary',
      }}
    >
      {textLines.map((line, index) => (
        <Box
          key={index}
          sx={{
            marginBottom: index < textLines.length - 1 ? { xs: '16px', sm: '24px', md: '40px', lg: '70px' } : '0', // Add spacing between lines
          }}
        >
          {renderTextWithBold(line, boldWords)}
        </Box>
      ))}
    </Box>
  );
}
