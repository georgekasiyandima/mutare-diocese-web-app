import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './App.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: "Bishop's Messages", path: "/bishops-messages" },
  { label: 'Diocese History', path: '/history' },
  { label: 'Commissions', path: '/commissions' },
  { label: 'Parishes & Deaneries', path: '/parishes-deaneries' },
  { label: 'Mass Broadcasts & Media', path: '/mass-broadcasts-media' },
  { label: 'Gallery General', path: '/gallery-general' },
  { label: 'Clerical Gallery', path: '/clerical-gallery' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'The Diocesan Factory', path: '/factory' },
  { label: 'Mutare Pastoral Centre', path: '/pastoral-centre' },
  { label: 'Religious Orders', path: '/religious-orders' },
];

const NavBar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" color="default" elevation={2} style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)', borderRadius: 16, margin: '1rem auto', maxWidth: 1200, boxShadow: '0 4px 16px rgba(44,32,18,0.10)' }}>
      <Toolbar variant={isMobile ? 'dense' : 'regular'} style={{ justifyContent: 'center', flexWrap: 'wrap', borderRadius: 16 }}>
        <Box display="flex" flexWrap="wrap" justifyContent="center" width="100%" gap={1}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link${isActive ? ' nav-link-active' : ''}`
              }
              style={{
                textDecoration: 'none',
                margin: '0.25rem 0.5rem',
                borderRadius: 12,
                transition: 'background 0.2s',
              }}
            >
              <Button
                sx={{
                  color: '#333',
                  fontWeight: 500,
                  fontSize: isMobile ? '0.95rem' : '1.08rem',
                  px: 2.5,
                  py: 1.2,
                  borderRadius: 12,
                  textTransform: 'none',
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(191,161,74,0.12)',
                    color: '#bfa14a',
                    boxShadow: '0 2px 8px rgba(191,161,74,0.08)',
                  },
                }}
                disableRipple
              >
                {link.label}
              </Button>
            </NavLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar; 