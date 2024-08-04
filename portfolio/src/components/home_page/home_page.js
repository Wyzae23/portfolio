import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; // Import Grid
import IconButton from '@mui/material/IconButton';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TypeWriter from '../typewriter/typewriter';
import art_img from '../../images/user-154199_1920.png'; // Import the image
import computer_img from '../../images/pc-guy.png';
import { Link, Element } from 'react-scroll';
import Typography from '@mui/material/Typography';
import StyledTypographyBox from '../styled_text_box/styled_text_box';
import SocialLinksBar from '../social_links_bar/social_links_bar';

export default function HomePage() {
    const start_text = "Hello!\n I am Harold, welcome to my portfolio page. Thanks for being here!";
    const introduction_texts1 = [`I am currently a first year graduate student at UC Santa Barbara looking to get my MS in Computer Science`];
    const introduction_texts2 = [`I enjoy building full-stack web applications and do research in fairness in machine learning (specifically in NLP)`];
    const introduction_texts3 = [`I have professional experience with programming languages such as Python and Javascript`];
    const introduction_texts4 = [`I also have worked with sqlite3, PyTorch, Tensorflow, Pandas, and other libraries used with machine learning`];
    const bold_texts = ['Python', 'Javascript', 'sqlite3', 'PyTorch', 'Tensorflow', 'Pandas', 'MS', 'UC', 'Santa', 'Barbara', 'Science', 'Computer', 'fullstack', 'NLP', 'machine', 'learning'];
    const intro_text = introduction_texts1.concat(introduction_texts2, introduction_texts3, introduction_texts4);

    return (
        <Box sx={{ fontFamily: 'Patrick Hand, Arial, sans-serif' }}>
            {/* First section */}
            <Element name="firstSection" style={{ marginTop: '5vh' }}>
                <Box sx={{ height: '95vh', position: 'relative', textAlign: 'center' }}>
                    <Grid container spacing={2} sx={{ height: '100%', padding: 2, alignItems: 'center' }}>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <TypeWriter text={start_text} />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                src={computer_img}
                                alt='Example'
                                style={{ borderRadius: '8px', width: '50%', height: 'auto' }}
                            />
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 20,
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Link to="secondSection" smooth={true} duration={750}>
                            <IconButton color="inherit" size='large'>
                                <ArrowDownwardIcon sx={{ height: { xs: '8vh', md: '10vh' }, width: { xs: '8vh', md: '10vh' } }} />
                            </IconButton>
                        </Link>
                    </Box>
                </Box>
            </Element>
            {/* Second section */}
            <Element name="secondSection">
                <Box sx={{ minHeight: '90vh', position: 'relative', textAlign: 'center', padding: 2 }}>
                    <Typography sx={{ fontSize: '40px', color: 'background.primary', textDecoration: 'underline' }}>
                        Introduction
                    </Typography>
                    <Grid container spacing={2} sx={{ alignItems: 'center', height: '100%', padding: 2 }}>
                        <Grid item xs={12} md={9}>
                            <StyledTypographyBox textLines={intro_text} boldWords={bold_texts} />
                        </Grid>
                        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img
                                src={art_img}
                                alt='Example'
                                style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{ marginTop: '5vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        <Typography sx={{ fontSize: '20px' }}>
                            Feel free to reach out!
                        </Typography>
                        <SocialLinksBar />
                    </Box>
                </Box>
            </Element>
        </Box>
    );
}
