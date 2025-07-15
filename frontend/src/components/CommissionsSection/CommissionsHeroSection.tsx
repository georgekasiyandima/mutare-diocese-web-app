import React from 'react';
import {
  Box,
  Container,
  Typography,
  Chip,
} from '@mui/material';
import { Star } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

interface CommissionsHeroSectionProps {
  commissionCount: number;
}

const CommissionsHeroSection: React.FC<CommissionsHeroSectionProps> = React.memo(({ commissionCount }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
        py: 8,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Diocesan Commissions
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              opacity: 0.9,
              maxWidth: 800,
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.3rem' }
            }}
          >
            Serving the Diocese of Mutare through specialized ministries and outreach programs
          </Typography>
          <Chip
            icon={<Star />}
            label={`${commissionCount} Active Commissions`}
            sx={{
              bgcolor: 'rgba(255,255,255,0.2)',
              color: 'white',
              fontSize: '1.1rem',
              py: 1
            }}
          />
        </Box>
      </Container>
    </Box>
  );
});

CommissionsHeroSection.displayName = 'CommissionsHeroSection';

export default CommissionsHeroSection; 