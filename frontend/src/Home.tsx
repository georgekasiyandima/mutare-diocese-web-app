import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid, { GridProps } from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const JUBILEE = {
  year: 2025,
  theme: 'Pilgrims of Hope',
  logo: '/jubilee-logo.png', // Assumes this is in public/
  description: `The Jubilee Year 2025 is themed "Pilgrims of Hope". It's a time for Catholics to seek spiritual renewal, encounter God, and experience forgiveness and healing. Pilgrimage to Rome or designated sacred sites within dioceses is encouraged. Indulgences can be obtained through specific actions like pilgrimage, confession, communion, and praying for the Pope's intentions. The Jubilee is especially relevant given the current global context, offering a message of hope to the world.`
};

const FACTS = [
  { label: 'Area', value: '32,202 km²' },
  { label: 'Population', value: '1,675,000' },
  { label: 'Catholics', value: '119,500' },
  { label: 'Feast Day', value: 'Our Lady of Mount Carmel (16 July)' },
  { label: 'Deaneries', value: '7' },
  { label: 'Parishes', value: '29' },
];

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: isMobile ? 320 : 480,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: "linear-gradient(rgba(44,32,18,0.25), rgba(44,32,18,0.25)), url('/cathedral.jpg') center/cover no-repeat",
          borderRadius: 4,
          boxShadow: 3,
          mb: 6,
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
            px: 2,
          }}
        >
          <img src="/Logo.png" alt="Mutare Diocese Logo" style={{ width: 100, height: 100, objectFit: 'contain', marginBottom: 16 }} />
          <Typography variant={isMobile ? 'h4' : 'h2'} color="#fff" fontWeight={700} fontFamily="Lora, serif" sx={{ textShadow: '2px 4px 12px #5C4033' }}>
            Welcome to the Catholic Diocese of Mutare
          </Typography>
          <Typography variant="h6" color="#fff" mt={2} mb={3} sx={{ textShadow: '1px 2px 8px #5C4033' }}>
            Journeying together in faith, hope, and love.
          </Typography>
          <Box display="flex" gap={2} flexWrap="wrap" justifyContent="center">
            <Button variant="contained" color="primary" component={RouterLink} to="/bishops-messages" sx={{ fontWeight: 600, borderRadius: 8 }}>
              Bishop's Messages
            </Button>
            <Button variant="outlined" color="primary" component={RouterLink} to="/contact" sx={{ fontWeight: 600, borderRadius: 8, bgcolor: 'rgba(255,255,255,0.85)' }}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Jubilee/Theme Section */}
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="center" gap={4} mb={6} justifyContent="center">
        <Card sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 3,
          minWidth: 320,
          maxWidth: 420,
          boxShadow: 4,
          background: 'rgba(255,255,255,0.98)',
          border: '2px solid #bfa14a',
          borderRadius: 4,
        }}>
          <img src={JUBILEE.logo} alt={`Jubilee ${JUBILEE.year} Logo`} style={{ width: 160, height: 160, objectFit: 'contain', marginBottom: 16 }} />
          <Typography variant="h5" color="#5C4033" fontWeight={700} fontFamily="Lora, serif" mb={1} align="center">
            Jubilee {JUBILEE.year}: {JUBILEE.theme}
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center">
            {JUBILEE.description}
          </Typography>
        </Card>
      </Box>

      {/* Quick Facts Section */}
      <Box mb={6}>
        <Typography variant="h5" color="#5C4033" fontWeight={700} fontFamily="Lora, serif" mb={2} align="center">
          Quick Facts
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {FACTS.map((fact) => (
            <Grid item component="div" xs={12} sm={6} md={4} key={String(fact.label)} {...({ item: true } as GridProps)}>
              <Card sx={{ background: 'rgba(255,255,255,0.95)', borderLeft: '5px solid #bfa14a', borderRadius: 2, boxShadow: 1 }}>
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

      {/* Call to Action / Navigation */}
      <Box display="flex" justifyContent="center" gap={3} mb={6}>
        <Button variant="contained" color="primary" component={RouterLink} to="/mass-broadcasts-media" sx={{ fontWeight: 600, borderRadius: 8 }}>
          Mass Broadcasts
        </Button>
        <Button variant="outlined" color="primary" component={RouterLink} to="/gallery-general" sx={{ fontWeight: 600, borderRadius: 8 }}>
          Gallery
        </Button>
      </Box>
    </Box>
  );
};

export default Home;