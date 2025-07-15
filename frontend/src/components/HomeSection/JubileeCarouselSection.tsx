import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
}

interface JubileeCarouselSectionProps {
  images: CarouselImage[];
}

const JubileeCarouselSection: React.FC<JubileeCarouselSectionProps> = React.memo(({ images }) => {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handlePrev = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <Box sx={{ mb: { xs: 4, md: 6 } }}>
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        color="#5C4033"
        fontWeight={700}
        fontFamily="Lora, serif"
        sx={{ mb: 3, textAlign: 'center' }}
      >
        Jubilee Pilgrimage of Hope Launch
      </Typography>
      <Box sx={{ maxWidth: 700, mx: 'auto', position: 'relative' }}>
        <Box sx={{ position: 'relative', width: '100%', height: isMobile ? 220 : 340, overflow: 'hidden', borderRadius: 4, boxShadow: 2, bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={images[index].src}
            alt={images[index].alt}
            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 4, display: 'block', background: '#f5eee6' }}
            aria-label={images[index].caption}
          />
          <Typography
            variant="subtitle1"
            color="#5C4033"
            fontWeight={600}
            sx={{
              position: 'absolute',
              bottom: 12,
              left: 0,
              width: '100%',
              textAlign: 'center',
              bgcolor: 'rgba(255,255,255,0.85)',
              py: 0.5,
              fontFamily: 'Lora, serif',
            }}
            aria-live="polite"
          >
            {images[index].caption}
          </Typography>
          <Button
            onClick={handlePrev}
            aria-label="Previous image"
            sx={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', minWidth: 0, p: 1, bgcolor: '#fff', borderRadius: '50%', boxShadow: 1, zIndex: 2 }}
          >
            &#8592;
          </Button>
          <Button
            onClick={handleNext}
            aria-label="Next image"
            sx={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', minWidth: 0, p: 1, bgcolor: '#fff', borderRadius: '50%', boxShadow: 1, zIndex: 2 }}
          >
            &#8594;
          </Button>
        </Box>
      </Box>
      <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 2, mb: 2 }}>
        The Jubilee Pilgrimage of Hope Launch marks the beginning of our journey as Pilgrims of Hope for 2025. Join us in celebrating faith, unity, and renewal.
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="outlined"
          color="primary"
          href="/jubilee-pilgrimage"
          aria-label="View all Jubilee Pilgrimage photos"
          sx={{ fontWeight: 600, borderRadius: 8 }}
        >
          View All Photos
        </Button>
      </Box>
    </Box>
  );
});

export default JubileeCarouselSection; 