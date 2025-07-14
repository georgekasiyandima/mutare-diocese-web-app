import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Donate: React.FC = () => (
  <Box sx={{ maxWidth: 600, mx: 'auto', mt: 6, mb: 8, px: 2 }}>
    {/* Hero Banner */}
    <Box
      sx={{
        width: '100%',
        minHeight: 180,
        background: 'linear-gradient(135deg, #fffbe6 60%, #bfa14a22 100%)',
        borderRadius: 4,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 4,
        p: { xs: 3, md: 5 },
        textAlign: 'center',
      }}
    >
      <FavoriteIcon sx={{ color: '#bfa14a', fontSize: 48, mb: 1 }} />
      <Typography variant="h4" fontWeight={700} color="#5C4033" fontFamily="Lora, serif" mb={1}>
        Support the Mission
      </Typography>
      <Typography variant="h6" color="text.secondary" mb={2}>
        Thank you for supporting the Catholic Diocese of Mutare
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{
          bgcolor: '#bfa14a',
          color: '#fff',
          fontWeight: 700,
          borderRadius: 8,
          px: 5,
          py: 1.5,
          fontSize: { xs: '1rem', md: '1.15rem' },
          boxShadow: '0 4px 16px rgba(191,161,74,0.18)',
          textTransform: 'uppercase',
          letterSpacing: 1,
          '&:hover': {
            bgcolor: '#a88d2a',
            color: '#fff',
            transform: 'translateY(-2px) scale(1.04)',
            boxShadow: '0 6px 18px rgba(191,161,74,0.25)',
            transition: 'all 0.3s ease'
          }
        }}
        disabled
      >
        Donate Now
      </Button>
      <Typography variant="caption" color="text.secondary" mt={2}>
        (Online giving coming soon)
      </Typography>
    </Box>
    {/* Info Card */}
    <Card sx={{ background: 'rgba(255,255,255,0.97)', borderRadius: 3, boxShadow: 2 }}>
      <CardContent>
        <Typography variant="h6" color="#5C4033" fontWeight={700} mb={2}>
          Your Gift Makes a Difference
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={2}>
          Donations help us support parishes, schools, health outreach, youth programs, and the most vulnerable in our communities. Every contribution, large or small, is a blessing to the Diocese and those we serve.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          For more information about giving, please contact the Diocesan Office at <a href="mailto:diomutare@gmail.com" style={{ color: '#bfa14a', textDecoration: 'underline' }}>diomutare@gmail.com</a> or call +263 020 62347.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default Donate; 