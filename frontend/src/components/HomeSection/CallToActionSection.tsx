import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const CallToActionSection: React.FC = React.memo(() => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      gap={3} 
      sx={{ 
        mb: { xs: 4, md: 6 },
        flexWrap: 'wrap',
        px: { xs: 2, md: 0 }
      }}
    >
      <Button 
        variant="contained" 
        color="primary" 
        component={RouterLink} 
        to="/mass-broadcasts-media" 
        aria-label="Watch Mass Broadcasts"
        sx={{ 
          fontWeight: 600, 
          borderRadius: 8,
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(191,161,74,0.3)',
            transition: 'all 0.3s ease'
          }
        }}
      >
        Mass Broadcasts
      </Button>
      <Button 
        variant="outlined" 
        color="primary" 
        component={RouterLink} 
        to="/gallery-general" 
        aria-label="View Photo Gallery"
        sx={{ 
          fontWeight: 600, 
          borderRadius: 8,
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(191,161,74,0.3)',
            transition: 'all 0.3s ease'
          }
        }}
      >
        Gallery
      </Button>
    </Box>
  );
});

CallToActionSection.displayName = 'CallToActionSection';

export default CallToActionSection; 