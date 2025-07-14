import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from 'react-router-dom';

const quickLinks = [
  { label: "Bishop's Messages", path: "/" },
  { label: 'Diocese History', path: '/history' },
  { label: 'Commissions', path: '/commissions' },
  { label: 'Contact Us', path: '/contact' },
];

const brown = '#5C4033';
const gold = '#bfa14a';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        maxWidth: '100vw', // Prevent overflow
        overflowX: 'hidden', // Ensure no horizontal scrolling
        mt: 6,
        py: 4,
        px: { xs: 2, sm: 4, md: 6 }, // Responsive padding
        background: 'linear-gradient(90deg, #fffbe6 0%, #f5eee6 100%)',
        borderTop: `2px solid ${gold}`,
        boxShadow: '0 -2px 12px rgba(44,32,18,0.08)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        justifyContent: { xs: 'center', md: 'space-between' },
        gap: { xs: 3, md: 4 },
        boxSizing: 'border-box', // Ensure padding/margins don't cause overflow
      }}
    >
      {/* Left: Flags, Logo and Contact Info */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: 1.5,
          flex: 1,
          minWidth: 0, // Prevent overflow
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <img
            src="/Logo.png"
            alt="Mutare Diocese Logo"
            style={{ height: 48, width: 48, objectFit: 'contain', marginRight: 12 }}
          />
          <Typography variant="h6" color={brown} fontFamily="Lora, serif" fontWeight={700}>
            Mutare Diocese
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
          <LocationOnIcon fontSize="small" sx={{ color: brown, mt: 0.5 }} aria-hidden="true" />
          <Box>
            <Typography variant="body2" color="text.secondary">
              Bishop's House, Marymount Road
            </Typography>
            <Typography variant="body2" color="text.secondary">
              P.O. Box 47, Mutare
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <PhoneIcon fontSize="small" sx={{ color: brown }} aria-hidden="true" />
          <Typography variant="body2" color="text.secondary">
            +263 020 62347
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <EmailIcon fontSize="small" sx={{ color: brown }} aria-hidden="true" />
          <Link href="mailto:diomutare@gmail.com" color="inherit" underline="hover" sx={{ fontSize: '0.875rem' }}>
            diomutare@gmail.com
          </Link>
        </Box>
      </Box>

      {/* Center: Quick Links */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1.5,
          flex: 1,
          minWidth: 0,
        }}
      >
        <Typography variant="subtitle1" color={brown} fontWeight={700} fontFamily="Lora, serif">
          Quick Links
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.75 }}>
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              component={NavLink}
              to={link.path}
              color={brown}
              underline="none"
              sx={{
                fontWeight: 500,
                fontSize: '1rem',
                transition: 'color 0.2s ease-in-out',
                '&:hover': { color: gold },
              }}
            >
              {link.label}
            </Link>
          ))}
        </Box>
      </Box>

      {/* Right: Social Links and Motto */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-end' },
          gap: 1.5,
          flex: 1,
          minWidth: 0,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            size="small"
            sx={{
              color: brown,
              '&:hover': { color: gold, transform: 'scale(1.1)', transition: 'all 0.2s ease-in-out' },
            }}
            aria-label="Facebook"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            href="https://twitter.com"
            target="_blank"
            rel="noopener"
            size="small"
            sx={{
              color: brown,
              '&:hover': { color: gold, transform: 'scale(1.1)', transition: 'all 0.2s ease-in-out' },
            }}
            aria-label="Twitter"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            href="https://youtube.com"
            target="_blank"
            rel="noopener"
            size="small"
            sx={{
              color: brown,
              '&:hover': { color: gold, transform: 'scale(1.1)', transition: 'all 0.2s ease-in-out' },
            }}
            aria-label="YouTube"
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            href="mailto:diomutare@gmail.com"
            size="small"
            sx={{
              color: brown,
              '&:hover': { color: gold, transform: 'scale(1.1)', transition: 'all 0.2s ease-in-out' },
            }}
            aria-label="Email"
          >
            <EmailIcon />
          </IconButton>
        </Box>
        <Typography variant="caption" color={gold} fontStyle="italic" textAlign={{ xs: 'center', md: 'right' }}>
          "Our Lady of Mount Carmel, Pray For Us."
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={{ xs: 'center', md: 'right' }}>
          © {new Date().getFullYear()} Catholic Diocese of Mutare. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;