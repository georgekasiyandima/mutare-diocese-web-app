import React from 'react';
import Box from '@mui/material/Box';
import { TranslationContext } from './App';
import HeroSection from './components/HomeSection/HeroSection';
import JubileeThemeSection from './components/HomeSection/JubileeThemeSection';
import QuickFactsSection from './components/HomeSection/QuickFactsSection';
import JubileeCarouselSection from './components/HomeSection/JubileeCarouselSection';
import FeastDaySection from './components/HomeSection/FeastDaySection';
import CallToActionSection from './components/HomeSection/CallToActionSection';

const JUBILEE_CAROUSEL_IMAGES = [
  { src: '/jubl1.jpg', alt: 'Pilgrimage Launch - Procession', caption: 'Pilgrimage Launch Procession' },
  { src: '/jubl2.jpg', alt: 'Pilgrimage Launch - Mass', caption: 'Sisters in procession' },
  { src: '/jubl3.jpg', alt: 'Pilgrimage Launch - Gathering', caption: 'Priests Gathered for Jubilee Launch' },
  { src: '/jubl4.jpg', alt: 'Pilgrimage Launch - Choir', caption: 'Dancers at Jubilee Launch' },
];

const Home: React.FC = () => {
  // Example: Using environment variable from .env
  // Access with process.env.REACT_APP_API_URL
  console.log('API URL:', process.env.REACT_APP_API_URL);

  return (
    <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
      <HeroSection />

      <JubileeThemeSection />

      <FeastDaySection />

      <JubileeCarouselSection images={JUBILEE_CAROUSEL_IMAGES} />

      <QuickFactsSection />

      <CallToActionSection />
    </Box>
  );
};

export default Home;