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
          <img src="/Logo.png" alt="Mutare Diocese Logo" className="header-logo" />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography
            variant={isMobile ? 'h5' : 'h3'}
            sx={{
              fontFamily: 'Lora, serif',
              fontWeight: 800,
              background: 'linear-gradient(90deg, #bfa14a 0%, #5C4033 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 4px 12px #5C4033',
              letterSpacing: 1.5,
              mb: 0.5,
            }}
            className="header-title"
          >
            Catholic Diocese of Mutare
          </Typography>
          <Box sx={{ width: 60, height: 4, background: 'linear-gradient(90deg, #bfa14a 0%, #5C4033 100%)', borderRadius: 2, mb: 1 }} />
        </Box>
        <Box display="flex" alignItems="center">
          <img src="/Our_ladymc.png" alt="Feast Day Diocese" className="header-logo-right" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 