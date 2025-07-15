import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Chip,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Commission } from '../../constants/commissions';

interface FeaturedCommissionSectionProps {
  featuredCommission: Commission;
  onCommissionClick: (commission: Commission) => void;
}

const FeaturedCommissionSection: React.FC<FeaturedCommissionSectionProps> = React.memo(({ 
  featuredCommission, 
  onCommissionClick 
}) => {
  return (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          textAlign: 'center',
          mb: 4,
          fontWeight: 600,
          color: 'text.primary'
        }}
      >
        Featured Commission
      </Typography>
      
      <Paper
        elevation={8}
        sx={{
          borderRadius: 4,
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${featuredCommission.color}15 0%, ${featuredCommission.color}05 100%)`,
          border: `2px solid ${featuredCommission.color}30`
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                {featuredCommission.logo && (
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      mr: 2,
                      borderRadius: '50%',
                      border: `3px solid ${featuredCommission.color}`,
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'white'
                    }}
                  >
                    <img
                      src={`/${featuredCommission.logo}`}
                      alt={`${featuredCommission.name} logo`}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        padding: '8px'
                      }}
                    />
                  </Box>
                )}
                <Box>
                  <Typography variant="h4" component="h3" sx={{ fontWeight: 700, color: featuredCommission.color }}>
                    {featuredCommission.name}
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    {featuredCommission.shortName}
                  </Typography>
                </Box>
              </Box>
              
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                {featuredCommission.description}
              </Typography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                {featuredCommission.objectives.slice(0, 3).map((objective, index) => (
                  <Chip
                    key={index}
                    label={objective}
                    size="small"
                    sx={{
                      bgcolor: `${featuredCommission.color}20`,
                      color: featuredCommission.color,
                      fontWeight: 500
                    }}
                  />
                ))}
              </Box>
              
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={() => onCommissionClick(featuredCommission)}
                sx={{
                  alignSelf: 'flex-start',
                  bgcolor: featuredCommission.color,
                  '&:hover': {
                    bgcolor: featuredCommission.color,
                    opacity: 0.9
                  }
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: featuredCommission.color }}>
                Key Activities
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                {featuredCommission.activities?.slice(0, 4).map((activity, index) => (
                  <Typography
                    key={index}
                    component="li"
                    variant="body2"
                    sx={{ mb: 1, color: 'text.secondary' }}
                  >
                    {activity}
                  </Typography>
                ))}
              </Box>
              
              {featuredCommission.contact && (
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                    Contact: {featuredCommission.contact.email || featuredCommission.contact.phone}
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
});

FeaturedCommissionSection.displayName = 'FeaturedCommissionSection';

export default FeaturedCommissionSection; 