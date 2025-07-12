import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import type { GridProps } from '@mui/material/Grid'; // Import GridProps for type assertion

const FACTS = [
  { label: 'Area', value: '32,202 km²' },
  { label: 'Population', value: '1,675,000' },
  { label: 'Catholics', value: '119,500' },
  { label: 'Feast Day', value: 'Our Lady of Mount Carmel (16 July)' },
];

const TIMELINE = [
  {
    year: '1908',
    title: 'First Mission at Triashill',
    desc: 'German Marianhill missionaries establish the first mission at Triashill.',
    img: '/Triashill.jpg',
  },
  {
    year: '1953',
    title: 'Prefecture Apostolic Created',
    desc: 'Prefecture Apostolic of Umtali created, entrusted to the Irish Carmelites.',
    img: '/Carmelites.jpg',
  },
  {
    year: '1957',
    title: 'Diocese Status & First Bishop',
    desc: 'Prefecture raised to Diocese of Umtali. Donald Lamont appointed first Bishop.',
    img: '/BishopL.jpg',
  },
  {
    year: '1982',
    title: 'Name Change',
    desc: 'Diocese renamed to Diocese of Mutare.',
    img: '/history1.jpg',
  },
  {
    year: '1981–2016',
    title: 'Bishop Alexio Muchabaiwa',
    desc: 'Bishop Alexio Muchabaiwa leads the diocese.',
    img: '/bishopMucha.jpg',
  },
  {
    year: '2016–present',
    title: 'Bishop Paul Horan',
    desc: 'Bishop Paul Horan, O.Carm., is the current bishop.',
    img: '/bishop.jpg',
  },
];

const BISHOPS = [
  {
    name: 'Bishop Donald Lamont OCarm',
    born: '27 July 1911',
    died: '14 August 2003',
    ordained: '11 July 1937',
    consecrated: '16 June 1957',
    retired: null,
    image: '/bishop-dlamont.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Donal_Lamont',
  },
  {
    name: 'Bishop Alexio Churu Muchabaiwa',
    born: '21 June 1939',
    died: '8 January 2024',
    ordained: '24 August 1968',
    consecrated: '21 February 1982',
    retired: '28 May 2016',
    image: '/bishopMucha.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Alexio_Churu_Muchabaiwa',
  },
  {
    name: 'Bishop Paul Horan OCarm (Incumbent)',
    born: '17 October 1962',
    died: null,
    ordained: null,
    consecrated: '28 August',
    retired: null,
    image: '/bishop.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Paul_Horan',
  },
  {
    name: 'Auxiliary Bishop Patrick Mumbure Mutume',
    born: '31 October 1943',
    died: '8 February 2017',
    ordained: '1972',
    consecrated: null,
    retired: null,
    image: '/BishopM.jpeg',
    wiki: 'https://en.wikipedia.org/wiki/Patrick_Mumbure_Mutume',
  },
];

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
            "linear-gradient(rgba(44,32,18,0.35), rgba(44,32,18,0.35)), url('/history1.jpg') center/cover no-repeat",
          borderRadius: 4,
          boxShadow: 3,
          mb: 6,
          textAlign: 'center',
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
          {BISHOPS.map((bishop) => (
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
                }}
              >
                <img
                  src={bishop.image}
                  alt={bishop.name}
                  style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 12, marginBottom: 16, boxShadow: '0 2px 8px #bfa14a55' }}
                />
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
          {FACTS.map((fact) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              component="div"
              key={fact.label}
              {...({ item: true } as GridProps)} // Type assertion for item prop
            >
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

      {/* Timeline */}
      <Box mb={6}>
        <Typography variant="h5" color="#5C4033" fontWeight={700} fontFamily="Lora, serif" mb={3} align="center">
          Timeline of the Diocese
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {TIMELINE.map((event) => (
            <Grid
              item
              xs={12}
              md={6}
              component="div"
              key={event.year}
              {...({ item: true } as GridProps)} // Type assertion for item prop
            >
              <Card sx={{ display: 'flex', alignItems: 'center', p: 2, background: 'rgba(255,255,255,0.98)', boxShadow: 2, borderLeft: '5px solid #bfa14a', borderRadius: 3 }}>
                <img src={event.img} alt={event.title} style={{ width: 90, height: 90, objectFit: 'cover', borderRadius: 12, marginRight: 24 }} />
                <Box>
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
          src="/Map.jpg"
          alt="Map of Diocese of Mutare"
          style={{
            width: '100%',
            maxWidth: 500,
            borderRadius: 12,
            boxShadow: '0 4px 16px rgba(44,32,18,0.12)',
          }}
        />
        <Typography variant="body2" color="text.secondary" mt={1} align="center">
          The Diocese covers Maungwe, Mutasa, Mutare, Nyanga, Chimanimani, and Chipinge districts.
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
          href="https://en.wikipedia.org/wiki/Roman_Catholic_Diocese_of_Mutare"
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