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
    <AppBar
      position="static"
      color="default"
      elevation={0}
      style={{
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(8px)',
        borderRadius: 16,
        margin: '1rem auto 1.5rem auto',
        maxWidth: 1200,
        boxShadow: '0 2px 12px rgba(44,32,18,0.10)',
      }}
    >
      <Toolbar
        variant={isMobile ? 'dense' : 'regular'}
        style={{ justifyContent: 'center', flexWrap: 'wrap', minHeight: isMobile ? 48 : 64 }}
      >
        <Box display="flex" flexWrap="wrap" justifyContent="center" width="100%" gap={isMobile ? 0.5 : 1.5}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link${isActive ? ' nav-link-active' : ''}`
              }
              style={{
                textDecoration: 'none',
                margin: isMobile ? '0.15rem 0.25rem' : '0.25rem 0.75rem',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: isMobile ? '0.95rem' : '1.1rem',
                position: 'relative',
                paddingBottom: 4,
              }}
            >
              <Button
                sx={{
                  color: '#333',
                  fontWeight: 600,
                  fontSize: isMobile ? '0.95rem' : '1.1rem',
                  px: 2,
                  textTransform: 'none',
                  background: 'transparent',
                  boxShadow: 'none',
                  position: 'relative',
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