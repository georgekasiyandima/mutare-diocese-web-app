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
  logo: '/jubilee-logo.png',
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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
      {/* Hero Section */}
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
              marginBottom: 16 
            }} 
          />
          <Typography 
            variant={isMobile ? 'h4' : 'h2'} 
            color="#fff" 
            fontWeight={700} 
            fontFamily="Lora, serif" 
            sx={{ 
              textShadow: '2px 4px 12px #5C4033',
              mb: { xs: 1, md: 2 }
            }}
          >
            Welcome to the Catholic Diocese of Mutare
          </Typography>
          <Typography 
            variant={isMobile ? 'body1' : 'h6'} 
            color="#fff" 
            sx={{ 
              textShadow: '1px 2px 8px #5C4033',
              mb: { xs: 2, md: 3 },
              px: { xs: 1, md: 2 }
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
                  transition: 'all 0.3s ease'
                }
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
                  transition: 'all 0.3s ease'
                }
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Jubilee/Theme Section */}
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
              width: isMobile ? 120 : 160, 
              height: isMobile ? 120 : 160, 
              objectFit: 'contain', 
              marginBottom: 12, 
              filter: 'drop-shadow(0 4px 12px #bfa14a88)' 
            }} 
          />
          <Typography 
            variant={isMobile ? 'h6' : 'h5'} 
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

      {/* Feast Day Section */}
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

      {/* Quick Facts Section */}
      <Box sx={{ mb: { xs: 4, md: 6 }, px: { xs: 2, md: 0 } }}>
        <Typography 
          variant={isMobile ? 'h6' : 'h5'} 
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

      {/* Call to Action / Navigation */}
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
    </Box>
  );
};

export default Home;