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
          minHeight: 320,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          background:
            "linear-gradient(rgba(44,32,18,0.35), rgba(44,32,18,0.35)), url('/history1.jpg') center center/cover no-repeat",
          borderRadius: 4,
          boxShadow: 3,
          mb: 6,
          textAlign: 'center',
          px: { xs: 2, md: 4 },
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
          sx={{ textShadow: '2px 4px 12px #5C4033', mt: 4 }}
          >
            History of the Diocese of Mutare
          </Typography>
          <Typography
            variant="h6"
            color="#fff"
            mt={2}
            mb={3}
            sx={{ textShadow: '1px 2px 8px #5C4033' }}
          >
            From humble beginnings to a vibrant Catholic community in Manicaland.
          </Typography>
        </Box>

      {/* Bishop Cards Section */}
      <Box mb={6}>
        <Typography variant="h5" color="#5C4033" fontWeight={700} fontFamily="Lora, serif" mb={3} align="center">
          Bishops of Mutare Diocese
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {DIOCESE_BISHOPS.map((bishop) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              component="div"
              key={bishop.name}
              {...({ item: true } as GridProps)} // Type assertion for item prop
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 2,
                  background: 'rgba(255,255,255,0.98)',
                  boxShadow: 2,
                  borderLeft: '5px solid #bfa14a',
                  borderRadius: 3,
                  minHeight: 420,
                  height: '100%',
                }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  mb: 2,
                  width: 100,
                  height: 100,
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
                <Typography variant="h6" color="#5C4033" fontWeight={700} fontFamily="Lora, serif" align="center">
                  {bishop.name}
                </Typography>
                <Box mt={1} mb={1}>
                  <Typography variant="body2" color="text.secondary" align="center">
                    <strong>Born:</strong> {bishop.born}{bishop.died ? `  |  Died: ${bishop.died}` : ''}
                  </Typography>
                  {bishop.ordained && (
                    <Typography variant="body2" color="text.secondary" align="center">
                      <strong>Ordained Priest:</strong> {bishop.ordained}
                    </Typography>
                  )}
                  {bishop.consecrated && (
                    <Typography variant="body2" color="text.secondary" align="center">
                      <strong>Consecration:</strong> {bishop.consecrated}
                    </Typography>
                  )}
                  {bishop.retired && (
                    <Typography variant="body2" color="text.secondary" align="center">
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
                  sx={{ fontWeight: 600, borderRadius: 8, mt: 'auto' }}
                >
                  Learn More
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Quick Facts */}
      <Box mb={6}>
        <Grid container spacing={2} justifyContent="center">
          {DIOCESE_FACTS.map((fact) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              component="div"
              key={fact.label}
              {...({ item: true } as GridProps)} // Type assertion for item prop
            >
              <Card sx={{ 
                background: 'rgba(255,255,255,0.95)', 
                borderLeft: '5px solid #bfa14a', 
                borderRadius: 2, 
                boxShadow: 1,
                height: '100%',
                minHeight: 120,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
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

      {/* Timeline */}
      <Box mb={6}>
        <Typography variant="h5" color="#5C4033" fontWeight={700} fontFamily="Lora, serif" mb={3} align="center">
          Timeline of the Diocese
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {DIOCESE_TIMELINE.map((event) => (
            <Grid
              item
              xs={12}
              md={6}
              component="div"
              key={event.year}
              {...({ item: true } as GridProps)} // Type assertion for item prop
            >
              <Card sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                p: 2, 
                background: 'rgba(255,255,255,0.98)', 
                boxShadow: 2, 
                borderLeft: '5px solid #bfa14a', 
                borderRadius: 3,
                height: '100%',
                minHeight: 140
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  width: 90,
                  height: 90,
                  borderRadius: 12,
                  overflow: 'hidden',
                  backgroundColor: '#f5eee6',
                  boxShadow: '0 2px 8px #bfa14a55',
                  marginRight: 24,
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
                  <Typography variant="h6" color="#5C4033" fontWeight={700} fontFamily="Lora, serif">
                    {event.year}
                  </Typography>
                  <Typography variant="subtitle1" color="#5C4033" fontWeight={600}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {event.desc}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Map Section */}
      <Box mb={6} display="flex" flexDirection="column" alignItems="center">
        <Typography
          variant="h5"
          color="#5C4033"
          fontWeight={700}
          fontFamily="'Lora', serif"
          mb={2}
          align="center"
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
          }}
        />
        <Typography variant="body2" color="text.secondary" mt={1} align="center">
          {DIOCESE_GEOGRAPHY.description}
        </Typography>
      </Box>

      {/* External Links */}
      <Box mb={6} textAlign="center">
        <Typography variant="h6" color="#5C4033" fontWeight={700} mb={2}>
          Learn More
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          href={DIOCESE_EXTERNAL_LINKS.wikipedia}
          target="_blank"
          rel="noopener"
          sx={{ fontWeight: 600, borderRadius: 8 }}
        >
          Wikipedia: Roman Catholic Diocese of Mutare
        </Button>
      </Box>
    </Box>
  );
};

export default History;