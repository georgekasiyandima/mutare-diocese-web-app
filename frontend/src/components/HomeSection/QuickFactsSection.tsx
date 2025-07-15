import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid, { GridProps } from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const FACTS = [
  { label: 'Area', value: '32,202 km²' },
  { label: 'Population', value: '1,675,000' },
  { label: 'Catholics', value: '119,500' },
  { label: 'Feast Day', value: 'Our Lady of Mount Carmel (16 July)' },
  { label: 'Deaneries', value: '7' },
  { label: 'Parishes', value: '29' },
];

const QuickFactsSection: React.FC = React.memo(() => (
  <Box sx={{ mb: { xs: 4, md: 6 }, px: { xs: 2, md: 0 } }}>
    <Typography 
      variant={'h6'} 
      color="#5C4033" 
      fontWeight={700} 
      fontFamily="Lora, serif" 
      sx={{ mb: 3, textAlign: 'center' }}
    >
      Quick Facts
    </Typography>
    <Grid container spacing={2} justifyContent="center">
      {FACTS.map((fact) => (
        <Grid item component="div" xs={12} sm={6} md={4} key={String(fact.label)} {...({ item: true } as GridProps)}>
          <Card 
            sx={{ 
              background: 'rgba(255,255,255,0.95)', 
              borderLeft: '5px solid #bfa14a', 
              borderRadius: 2, 
              boxShadow: 1,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(191,161,74,0.2)',
                transition: 'all 0.3s ease'
              }
            }}
          >
            <CardContent>
              <Typography variant="subtitle2" color="#5C4033" fontWeight={700} gutterBottom>
                {fact.label}
              </Typography>
              <Typography variant="h6" color="text.primary">
                {fact.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
));

export default QuickFactsSection; 