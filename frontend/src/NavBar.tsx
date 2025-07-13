import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
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

const VATICAN_LINKS = [
  {
    label: 'Local Church News',
    type: 'internal',
    path: '/news',
  },
  {
    label: 'The Holy See',
    type: 'external',
    url: 'https://www.vatican.va/content/vatican/en.html',
    desc: 'the official website of the Holy See',
  },
  {
    label: 'Vatican News',
    type: 'external',
    url: 'https://www.vaticannews.va/en.html',
    desc: 'the official Vatican News portal',
  },
];

const NavBar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingExternal, setPendingExternal] = useState<{ url: string; label: string; desc: string } | null>(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleVaticanClick = (link: typeof VATICAN_LINKS[0]) => {
    handleMenuClose();
    if (link.type === 'internal') {
      if (link.path) {
        navigate(link.path);
      }
    } else {
      setPendingExternal({ url: link.url || '', label: link.label || '', desc: link.desc || '' });
      setModalOpen(true);
    }
  };
  const handleModalClose = () => {
    setModalOpen(false);
    setPendingExternal(null);
  };
  const handleProceed = () => {
    if (pendingExternal) {
      window.open(pendingExternal.url, '_blank', 'noopener');
    }
    handleModalClose();
  };

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
          {/* News & Vatican Dropdown */}
          <Button
            aria-controls={anchorEl ? 'news-vatican-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={Boolean(anchorEl)}
            onClick={handleMenuOpen}
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
          >
            News & Vatican
          </Button>
          <Menu
            id="news-vatican-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{ 'aria-labelledby': 'news-vatican-button' }}
          >
            {VATICAN_LINKS.map((link) => (
              <MenuItem
                key={link.label}
                onClick={() => handleVaticanClick(link)}
                sx={{ fontFamily: 'Lora, serif', color: '#5C4033', fontWeight: 600 }}
              >
                {link.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
      {/* External Link Modal */}
      <Dialog open={modalOpen} onClose={handleModalClose} aria-labelledby="external-link-dialog-title" aria-describedby="external-link-dialog-desc">
        <DialogTitle id="external-link-dialog-title" sx={{ fontFamily: 'Lora, serif', color: '#5C4033', fontWeight: 700 }}>
          Leaving Our Website
        </DialogTitle>
        <DialogContent id="external-link-dialog-desc" sx={{ fontFamily: 'Lora, serif', color: '#5C4033' }}>
          <Typography sx={{ fontFamily: 'Lora, serif', color: '#5C4033' }}>
            You are about to leave this website and visit <b>{pendingExternal?.label}</b> ({pendingExternal?.desc}).<br />
            Do you wish to proceed?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button
            onClick={handleModalClose}
            variant="outlined"
            sx={{
              color: '#5C4033',
              borderColor: '#5C4033',
              fontFamily: 'Lora, serif',
              borderRadius: 2,
              fontWeight: 600,
              px: 3,
              '&:hover': {
                bgcolor: '#5C4033',
                color: '#fff',
                borderColor: '#5C4033',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleProceed}
            variant="contained"
            autoFocus
            sx={{
              bgcolor: '#bfa14a',
              color: '#fff',
              fontFamily: 'Lora, serif',
              borderRadius: 2,
              fontWeight: 600,
              px: 3,
              boxShadow: 'none',
              '&:hover': {
                bgcolor: '#5C4033',
                color: '#fff',
              },
            }}
          >
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};

export default NavBar; 