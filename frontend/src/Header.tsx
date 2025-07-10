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
          <img src="/Logo Mutare Diocese.png" alt="Mutare Diocese Logo" className="header-logo" />
        </Box>
        <Typography variant={isMobile ? 'h6' : 'h4'} className="header-title">
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