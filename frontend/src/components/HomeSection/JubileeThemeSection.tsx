import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const JUBILEE = {
  year: 2025,
  theme: 'Pilgrims of Hope',
  logo: '/jubilee-logo.png',
  description: `The Jubilee Year 2025 is themed "Pilgrims of Hope". It's a time for Catholics to seek spiritual renewal, encounter God, and experience forgiveness and healing. Pilgrimage to Rome or designated sacred sites within dioceses is encouraged. Indulgences can be obtained through specific actions like pilgrimage, confession, communion, and praying for the Pope's intentions. The Jubilee is especially relevant given the current global context, offering a message of hope to the world.`
};

const JubileeThemeSection: React.FC = React.memo(() => (
  <Box 
    display="flex" 
    flexDirection={{ xs: 'column', md: 'row' }} 
    alignItems="center" 
    gap={4} 
    sx={{ 
      justifyContent: 'center',
      mb: { xs: 4, md: 6 },
      px: { xs: 2, md: 0 }
    }}
  >
    <Box 
      flexShrink={0} 
      textAlign="center" 
      sx={{
        background: 'linear-gradient(135deg, #fffbe6 60%, #bfa14a22 100%)',
        border: '3px solid #bfa14a',
        borderRadius: 4,
        boxShadow: '0 4px 16px rgba(191,161,74,0.15)',
        p: { xs: 2, md: 3 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mb: { xs: 2, md: 0 },
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.3s ease'
        }
      }}
    >
      <img 
        src={JUBILEE.logo} 
        alt={`Jubilee ${JUBILEE.year} Logo - ${JUBILEE.theme}`} 
        style={{ 
          width: 120, 
          height: 120, 
          objectFit: 'contain', 
          marginBottom: 12, 
          filter: 'drop-shadow(0 4px 12px #bfa14a88)' 
        }} 
      />
      <Typography 
        variant={'h6'} 
        color="#5C4033" 
        fontWeight={700} 
        fontFamily="Lora, serif"
      >
        Jubilee {JUBILEE.year}: {JUBILEE.theme}
      </Typography>
    </Box>
    <Typography 
      variant="body1" 
      color="text.secondary" 
      sx={{ 
        textAlign: 'center',
        maxWidth: 600,
        px: { xs: 2, md: 0 }
      }}
    >
      {JUBILEE.description}
    </Typography>
  </Box>
));

export default JubileeThemeSection; 