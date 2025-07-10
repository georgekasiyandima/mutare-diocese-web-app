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
  { label: "Bishop's Messages", path: "/" },
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
    <AppBar position="static" color="default" elevation={1} style={{ background: 'rgba(255,255,255,0.95)' }}>
      <Toolbar variant={isMobile ? 'dense' : 'regular'} style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
        <Box display="flex" flexWrap="wrap" justifyContent="center" width="100%">
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
                borderRadius: 8,
              }}
            >
              <Button
                sx={{
                  color: '#333',
                  fontWeight: 400,
                  fontSize: isMobile ? '0.85rem' : '1rem',
                  px: 2,
                  textTransform: 'none',
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