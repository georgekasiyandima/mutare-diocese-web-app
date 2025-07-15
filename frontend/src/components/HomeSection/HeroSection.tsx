import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { TranslationContext } from '../../App';

const HeroSection: React.FC = React.memo(() => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useContext(TranslationContext);

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: isMobile ? 320 : 480,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(rgba(44,32,18,0.25), rgba(44,32,18,0.25)), url('/cathedral.jpg') center/cover no-repeat`,
        borderRadius: 4,
        boxShadow: 3,
        mb: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255,255,255,0.10)',
          borderRadius: 4,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <img
          src="/Logo.png"
          alt="Catholic Diocese of Mutare Official Logo"
          style={{
            width: isMobile ? 80 : 100,
            height: isMobile ? 80 : 100,
            objectFit: 'contain',
            marginBottom: 16,
          }}
        />
        <Typography
          variant={isMobile ? 'h4' : 'h2'}
          color="#fff"
          fontWeight={700}
          fontFamily="Lora, serif"
          sx={{
            textShadow: '2px 4px 12px #5C4033',
            mb: { xs: 1, md: 2 },
          }}
        >
          {t('welcome')}
        </Typography>
        <Typography
          variant={isMobile ? 'body1' : 'h6'}
          color="#fff"
          sx={{
            textShadow: '1px 2px 8px #5C4033',
            mb: { xs: 2, md: 3 },
            px: { xs: 1, md: 2 },
          }}
        >
          Journeying together in faith, hope, and love.
        </Typography>
        <Box
          display="flex"
          gap={2}
          flexWrap="wrap"
          justifyContent="center"
          sx={{ px: { xs: 1, md: 0 } }}
        >
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/bishops-messages"
            aria-label="Read Bishop's Messages"
            sx={{
              fontWeight: 600,
              borderRadius: 8,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(191,161,74,0.3)',
                transition: 'all 0.3s ease',
              },
            }}
          >
            Bishop's Messages
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/contact"
            aria-label="Contact the Diocese"
            sx={{
              fontWeight: 600,
              borderRadius: 8,
              bgcolor: 'rgba(255,255,255,0.85)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(191,161,74,0.3)',
                transition: 'all 0.3s ease',
              },
            }}
          >
            Contact Us
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={RouterLink}
            to="/donate"
            aria-label="Donate to Diocese Causes"
            sx={{
              fontWeight: 700,
              borderRadius: 8,
              bgcolor: '#bfa14a',
              color: '#fff',
              px: 4,
              py: 1.5,
              fontSize: { xs: '1rem', md: '1.15rem' },
              boxShadow: '0 4px 16px rgba(191,161,74,0.18)',
              textTransform: 'uppercase',
              letterSpacing: 1,
              ml: { xs: 0, md: 2 },
              '&:hover': {
                bgcolor: '#a88d2a',
                color: '#fff',
                transform: 'translateY(-2px) scale(1.04)',
                boxShadow: '0 6px 18px rgba(191,161,74,0.25)',
                transition: 'all 0.3s ease',
              },
            }}
          >
            {t('donateNow')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
});

export default HeroSection; 