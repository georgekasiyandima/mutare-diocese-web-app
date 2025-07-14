import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import type { GridProps } from '@mui/material/Grid'; // Import GridProps for type assertion
import { 
  DIOCESE_FACTS, 
  DIOCESE_TIMELINE, 
  DIOCESE_BISHOPS, 
  DIOCESE_GEOGRAPHY, 
  DIOCESE_EXTERNAL_LINKS 
} from './constants/history';

const History: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 180, md: 320 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          background:
            "linear-gradient(rgba(44,32,18,0.35), rgba(44,32,18,0.35)), url('/history1.jpg') center center/cover no-repeat",
          borderRadius: 4,
          boxShadow: 3,
          mb: { xs: 3, md: 6 },
          textAlign: 'center',
          px: { xs: 1, sm: 2, md: 4 },
          overflow: 'hidden',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Typography
          variant="h3"
          color="#fff"
          fontWeight={700}
          fontFamily="'Lora', serif"
          sx={{ textShadow: '2px 4px 12px #5C4033', mt: { xs: 2, md: 4 }, fontSize: { xs: '1.5rem', sm: '2.2rem', md: '2.8rem' }, lineHeight: 1.2 }}
        >
          History of the Diocese of Mutare
        </Typography>
        <Typography
          variant="h6"
          color="#fff"
          mt={{ xs: 1, md: 2 }}
          mb={{ xs: 2, md: 3 }}
          sx={{ textShadow: '1px 2px 8px #5C4033', fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }, px: { xs: 1, md: 0 } }}
        >
          From humble beginnings to a vibrant Catholic community in Manicaland.
        </Typography>
      </Box>

      {/* Bishop Cards Section */}
      <Box mb={{ xs: 3, md: 6 }}>
        <Typography variant="h5" color="#5C4033" fontWeight={700} fontFamily="Lora, serif" mb={2} align="center" sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
          Bishops of Mutare Diocese
        </Typography>
        <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
          {DIOCESE_BISHOPS.map((bishop) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              component="div"
              key={bishop.name}
              {...({ item: true } as GridProps)}
              sx={{ display: 'flex' }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: { xs: 1, md: 2 },
                  background: 'rgba(255,255,255,0.98)',
                  boxShadow: 2,
                  borderLeft: '5px solid #bfa14a',
                  borderRadius: 3,
                  minHeight: { xs: 280, md: 420 },
                  height: '100%',
                  width: '100%',
                  mb: { xs: 2, md: 0 },
                }}
              >
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 2,
                  width: { xs: 70, md: 100 },
                  height: { xs: 70, md: 100 },
                  borderRadius: 12,
                  overflow: 'hidden',
                  backgroundColor: '#f5eee6',
                  boxShadow: '0 2px 8px #bfa14a55'
                }}>
                  <img
                    src={bishop.image}
                    alt={bishop.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block',
                      padding: '4px'
                    }}
                  />
                </Box>
                <Typography variant="h6" color="#5C4033" fontWeight={700} fontFamily="Lora, serif" align="center" sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
                  {bishop.name}
                </Typography>
                <Box mt={1} mb={1}>
                  <Typography variant="body2" color="text.secondary" align="center" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                    <strong>Born:</strong> {bishop.born}{bishop.died ? `  |  Died: ${bishop.died}` : ''}
                  </Typography>
                  {bishop.ordained && (
                    <Typography variant="body2" color="text.secondary" align="center" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      <strong>Ordained Priest:</strong> {bishop.ordained}
                    </Typography>
                  )}
                  {bishop.consecrated && (
                    <Typography variant="body2" color="text.secondary" align="center" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      <strong>Consecration:</strong> {bishop.consecrated}
                    </Typography>
                  )}
                  {bishop.retired && (
                    <Typography variant="body2" color="text.secondary" align="center" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      <strong>Retired:</strong> {bishop.retired}
                    </Typography>
                  )}
                </Box>
                <Button
                  variant="outlined"
                  color="primary"
                  href={bishop.wiki}
                  target="_blank"
                  rel="noopener"
                  sx={{ fontWeight: 600, borderRadius: 8, mt: 'auto', fontSize: { xs: '0.9rem', md: '1rem' }, px: { xs: 1.5, md: 2 } }}
                >
                  Learn More
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Quick Facts */}
      <Box mb={{ xs: 3, md: 6 }}>
        <Grid container spacing={2} justifyContent="center">
          {DIOCESE_FACTS.map((fact) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              component="div"
              key={fact.label}
              {...({ item: true } as GridProps)}
              sx={{ display: 'flex' }}
            >
              <Card sx={{
                background: 'rgba(255,255,255,0.95)',
                borderLeft: '5px solid #bfa14a',
                borderRadius: 2,
                boxShadow: 1,
                height: '100%',
                minHeight: { xs: 80, md: 120 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                mb: { xs: 2, md: 0 },
              }}>
                <CardContent sx={{ px: { xs: 1, md: 2 }, py: { xs: 1, md: 2 } }}>
                  <Typography variant="subtitle2" color="#5C4033" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' } }}>
                    {fact.label}
                  </Typography>
                  <Typography variant="h6" color="text.primary" sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                    {fact.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Timeline */}
      <Box mb={{ xs: 3, md: 6 }}>
        <Typography variant="h5" color="#5C4033" fontWeight={700} fontFamily="Lora, serif" mb={2} align="center" sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
          Timeline of the Diocese
        </Typography>
        <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
          {DIOCESE_TIMELINE.map((event) => (
            <Grid
              item
              xs={12}
              md={6}
              component="div"
              key={event.year}
              {...({ item: true } as GridProps)}
              sx={{ display: 'flex' }}
            >
              <Card sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'flex-start', md: 'center' },
                p: { xs: 1, md: 2 },
                background: 'rgba(255,255,255,0.98)',
                boxShadow: 2,
                borderLeft: '5px solid #bfa14a',
                borderRadius: 3,
                height: '100%',
                minHeight: { xs: 100, md: 140 },
                width: '100%',
                mb: { xs: 2, md: 0 },
              }}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: { xs: 60, md: 90 },
                  height: { xs: 60, md: 90 },
                  borderRadius: 12,
                  overflow: 'hidden',
                  backgroundColor: '#f5eee6',
                  boxShadow: '0 2px 8px #bfa14a55',
                  marginRight: { xs: 0, md: 3 },
                  marginBottom: { xs: 1, md: 0 },
                  flexShrink: 0
                }}>
                  <img
                    src={event.img}
                    alt={event.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      display: 'block',
                      padding: '4px'
                    }}
                  />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" color="#5C4033" fontWeight={700} fontFamily="Lora, serif" sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
                    {event.year}
                  </Typography>
                  <Typography variant="subtitle1" color="#5C4033" fontWeight={600} sx={{ fontSize: { xs: '0.98rem', md: '1.1rem' } }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.92rem', md: '1rem' } }}>
                    {event.desc}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Map Section */}
      <Box mb={{ xs: 3, md: 6 }} display="flex" flexDirection="column" alignItems="center">
        <Typography
          variant="h5"
          color="#5C4033"
          fontWeight={700}
          fontFamily="'Lora', serif"
          mb={1}
          align="center"
          sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}
        >
          Geographic Scope
        </Typography>
        <img
          src={DIOCESE_GEOGRAPHY.mapImage}
          alt={DIOCESE_GEOGRAPHY.mapAlt}
          style={{
            width: '100%',
            maxWidth: 500,
            borderRadius: 12,
            boxShadow: '0 4px 16px rgba(44,32,18,0.12)',
            marginBottom: 8
          }}
        />
        <Typography variant="body2" color="text.secondary" mt={1} align="center" sx={{ fontSize: { xs: '0.92rem', md: '1rem' }, px: { xs: 1, md: 0 } }}>
          {DIOCESE_GEOGRAPHY.description}
        </Typography>
      </Box>

      {/* External Links */}
      <Box mb={{ xs: 3, md: 6 }} textAlign="center">
        <Typography variant="h6" color="#5C4033" fontWeight={700} mb={1} sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
          Learn More
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          href={DIOCESE_EXTERNAL_LINKS.wikipedia}
          target="_blank"
          rel="noopener"
          sx={{ fontWeight: 600, borderRadius: 8, fontSize: { xs: '0.9rem', md: '1rem' }, px: { xs: 1.5, md: 2 } }}
        >
          Wikipedia: Roman Catholic Diocese of Mutare
        </Button>
      </Box>
    </Box>
  );
};

export default History;