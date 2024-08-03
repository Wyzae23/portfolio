import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TypeWriter from '../typewriter/typewriter';
import art_img from '../../images/user-154199_1920.png'; // Import the image
import computer_img from '../../images/pc-guy.png'
import { Link, Element } from 'react-scroll';
import Typography from '@mui/material/Typography'
import StyledTypographyBox from '../styled_text_box/styled_text_box';
import SocialLinksBar from '../social_links_bar/social_links_bar';

export default function HomePage() {
    const start_text = "Hello!\n I am Harold, welcome to my portfolio page. Thanks for being here!";
    const introduction_texts1 = [`I am currently a first year graduate student at UC Santa Barbara looking to get my MS in Computer Science`,
    ];
    const introduction_texts2 = [`I enjoy building full-stack web applications and do research in fairness in machine learning (specfically in NLP)`]
    const introduction_texts3 = [`I have professional experience with
    programming languages such as Python and Javascript`];
    const introduction_texts4 = [`I also have worked with
    sqlite3, PyTorch, Tensorflow, Pandas, and other libraries used with machine learning`]
    const bold_texts = ['Python', 'Javascript', 'sqlite3', 'PyTorch', 'Tensorflow', 'Pandas', 'MS', 
    'UC', 'Santa', 'Barbara', 'Science', 
    'Computer', 'fullstack', 'NLP', 'machine', 'learning']
    const intro_text = introduction_texts1.concat(introduction_texts2, introduction_texts3, introduction_texts4);
    return (
        <Box sx={{fontFamily: 'Patrick Hand, Arial, sans-serif'}}>
            {/* First section */}
            <Element name="firstSection" style={{marginTop: '5vh'}}>
                <Box sx={{ height: '95vh', position: 'relative', textAlign: 'center' }}>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            height: '100%', // Fill the available height
                            padding: 2,
                        }}
                    >
                        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <TypeWriter text={start_text} />
                        </Box>
                        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                src={computer_img}
                                alt='Example'
                                style={{ borderRadius: '8px', width: '50%', height: 'auto' }}
                            />
                        </Box>
                    </Box>
                    <Box 
                        sx={{ 
                            position: 'absolute', 
                            bottom: 20, // Adjust as needed
                            width: '100%',
                            display: 'flex', 
                            justifyContent: 'center' 
                        }}
                    >
                        <Link to="secondSection" smooth={true} duration={750}>
                            <IconButton 
                                color="inherit" 
                                size='large'
                                
                            >
                                <ArrowDownwardIcon sx={{ height: '15vh', width: '15vh' }} />
                            </IconButton>
                        </Link>
                    </Box>
                </Box>
            </Element>
            {/* Second section */}
            <Element name="secondSection">
                <Box sx={{ height: '90vh', position: 'relative', textAlign: 'center' }}>
                    <Typography
                            sx={{ 
                                fontSize: '40px', 
                                color: 'background.primary', 
                                textDecoration: 'underline' 
                            }}
                        >
                            Introduction
                        </Typography>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            justifyContent: 'spaced-between', 
                            alignItems: 'center', 
                            height: '70%', // Fill the available height
                            padding: 2,
                        }}
                    >
                        <Box sx={{flex: 0.75, justifyContent: 'center'}}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', paddingRight: 0}}>
                                <StyledTypographyBox textLines={intro_text} boldWords={bold_texts}></StyledTypographyBox>
                            </Box>
                        </Box>

                        <Box sx={{flex: 0.25}}>
                            <img
                                src={art_img}
                                alt='Example'
                                style={{ borderRadius: '8px', width: '40vh', height: '40vh' }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{marginTop: '5vh', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
                        <Box sx={{fontSize: '20px'}}>
                            Feel free to reach out!
                        </Box>
                        <Box>
                            <SocialLinksBar></SocialLinksBar>
                        </Box>
                    </Box>
                </Box>
            </Element>
        </Box>
    );
}
