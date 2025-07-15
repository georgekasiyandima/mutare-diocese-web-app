import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const FeastDaySection: React.FC = React.memo(() => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      mb={6} 
      display="flex" 
      flexDirection={{ xs: 'column', md: 'row' }} 
      alignItems="center" 
      gap={4} 
      sx={{ 
        justifyContent: 'center',
        px: { xs: 2, md: 0 }
      }}
    >
      <Box 
        flexShrink={0} 
        textAlign="center" 
        sx={{
          background: 'linear-gradient(135deg, #f5eee6 60%, #bfa14a22 100%)',
          border: '3px solid #5C4033',
          borderRadius: 4,
          boxShadow: '0 4px 16px rgba(92,64,51,0.15)',
          p: { xs: 3, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: { xs: 2, md: 0 },
          minWidth: { md: 350 },
          maxWidth: { md: 400 },
        }}
      >
        <Box 
          sx={{
            position: 'relative',
            width: { xs: 240, md: 280 },
            height: { xs: 280, md: 320 },
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(92,64,51,0.4)',
            background: 'rgba(255,255,255,0.1)',
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease',
              boxShadow: '0 8px 25px rgba(92,64,51,0.5)',
            }
          }}
        >
          <img 
            src="/Carmel_16July.jpg" 
            alt="Our Lady of Mount Carmel - Patroness of the Diocese of Mutare" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%', 
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.includes('Carmel_16July.jpg')) {
                target.src = '/Our_ladymc.png';
                target.alt = 'Our Lady of Mount Carmel - Alternative Image';
              }
            }}
          />
        </Box>
        <Typography 
          variant={isMobile ? 'h6' : 'h5'} 
          color="#5C4033" 
          fontWeight={700} 
          fontFamily="Lora, serif" 
          sx={{ mb: 1 }}
        >
          Our Lady of Mount Carmel
        </Typography>
        <Typography 
          variant={isMobile ? 'body1' : 'h6'} 
          color="#bfa14a" 
          fontWeight={600} 
          fontFamily="Lora, serif"
        >
          Feast Day: 16 July
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 600, flex: 1 }}>
        <Typography 
          variant={isMobile ? 'h6' : 'h5'} 
          color="#5C4033" 
          fontWeight={700} 
          fontFamily="Lora, serif" 
          sx={{ mb: 2 }}
        >
          Patroness of Our Diocese
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary" 
          sx={{ mb: 2, px: { xs: 1, md: 0 } }}
        >
          Our Lady of Mount Carmel is the patroness of the Diocese of Mutare. This feast day celebrates the Blessed Virgin Mary under her title of Our Lady of Mount Carmel, associated with the Carmelite Order.
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ px: { xs: 1, md: 0 } }}
        >
          The Carmelites have been instrumental in the establishment and growth of our diocese, bringing the spiritual heritage of Mount Carmel to the people of Manicaland.
        </Typography>
      </Box>
    </Box>
  );
});

FeastDaySection.displayName = 'FeastDaySection';

export default FeastDaySection; 