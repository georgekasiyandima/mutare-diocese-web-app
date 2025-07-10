import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './App.css';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" elevation={0} style={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar className="header-root">
        <Box display="flex" alignItems="center">
          <img src="/Logo.png" alt="Mutare Diocese Logo" className="header-logo" style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%' }} />
        </Box>
        <Typography
          variant={isMobile ? 'h4' : 'h2'}
          className="header-title"
          style={{
            fontFamily: 'Lora, Merriweather, serif',
            fontWeight: 700,
            fontSize: isMobile ? '2rem' : '3rem',
            letterSpacing: '2px',
            color: '#5C4033',
            textShadow: '1px 2px 8px rgba(92,64,51,0.10)',
          }}
        >
          Catholic Diocese of Mutare
        </Typography>
        <Box display="flex" alignItems="center">
          <img src="/feast-day-carmerlites.jpg" alt="Feast Day Carmelites" className="header-logo-right" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 