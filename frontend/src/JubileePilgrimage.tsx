import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const JUBILEE_IMAGES = Array.from({ length: 18 }, (_, i) => ({
  src: `/jubl${i + 1}.jpg`,
  alt: `Jubilee Pilgrimage of Hope Launch photo ${i + 1}`
}));

const VaticanJubileeURL = 'https://www.iubilaeum2025.va/en.html';

const JubileePilgrimage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const showPrev = () => setLightboxIndex((prev) => (prev === 0 ? JUBILEE_IMAGES.length - 1 : prev - 1));
  const showNext = () => setLightboxIndex((prev) => (prev === JUBILEE_IMAGES.length - 1 ? 0 : prev + 1));

  React.useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen]);

  // Handler for external link dialog
  const handleVaticanClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDialogOpen(true);
  };
  const handleProceed = () => {
    setDialogOpen(false);
    window.open(VaticanJubileeURL, '_blank', 'noopener');
  };
  const handleCancel = () => setDialogOpen(false);

  return (
    <Box sx={{ maxWidth: { xs: '100vw', lg: 1200 }, mx: 'auto', overflowX: 'hidden', px: { xs: 2, sm: 4 } }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: isMobile ? 220 : 320,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(rgba(44,32,18,0.35), rgba(44,32,18,0.35))`,
          borderRadius: 4,
          boxShadow: 3,
          mb: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Box sx={{ textAlign: 'center', zIndex: 1 }}>
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            color="#5C4033"
            fontWeight={700}
            fontFamily="Lora, serif"
            sx={{ mb: 2 }}
          >
            Jubilee Pilgrimage of Hope Launch
          </Typography>
          <Typography
            variant={isMobile ? 'body1' : 'h6'}
            color="#5C4033"
            sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.7 }}
          >
            2025 is the Jubilee Holy Year, the 2,025th anniversary of the Incarnation of our Lord, an "event of great spiritual, ecclesial, and social significance in the life of the Church." The concept of "Jubilee" has its origins in the Book of Leviticus (chapter 25) as a special year of reconciliation, pilgrimage, and coming home. Pope Francis has designated the 2025 Holy Year as a time to renew ourselves as "Pilgrims of Hope."
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3, fontWeight: 600, borderRadius: 8, px: 4, py: 1.5 }}
            onClick={handleVaticanClick}
            aria-label="Visit the official Vatican Jubilee 2025 website"
          >
            Official Vatican Jubilee 2025 Website
          </Button>
        </Box>
      </Box>
      {/* External Link Dialog */}
      <Dialog open={dialogOpen} onClose={handleCancel} aria-labelledby="external-link-dialog-title" aria-describedby="external-link-dialog-desc">
        <DialogTitle id="external-link-dialog-title" sx={{ fontFamily: 'Lora, serif', color: '#5C4033', fontWeight: 700 }}>
          Leaving Our Website
        </DialogTitle>
        <DialogContent id="external-link-dialog-desc" sx={{ fontFamily: 'Lora, serif', color: '#5C4033' }}>
          <Typography sx={{ fontFamily: 'Lora, serif', color: '#5C4033' }}>
            You are about to leave this website and visit the official Vatican Jubilee 2025 website (iubilaeum2025.va).<br />
            This site contains rich resources about the Jubilee Year.<br /><br />
            Do you wish to proceed?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button
            onClick={handleCancel}
            variant="outlined"
            sx={{
              color: '#5C4033',
              borderColor: '#5C4033',
              fontFamily: 'Lora, serif',
              borderRadius: 2,
              fontWeight: 600,
              px: 3,
              '&:hover': {
                bgcolor: '#5C4033',
                color: '#fff',
                borderColor: '#5C4033',
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleProceed}
            variant="contained"
            autoFocus
            sx={{
              bgcolor: '#bfa14a',
              color: '#fff',
              fontFamily: 'Lora, serif',
              borderRadius: 2,
              fontWeight: 600,
              px: 3,
              boxShadow: 'none',
              '&:hover': {
                bgcolor: '#5C4033',
                color: '#fff',
              },
            }}
          >
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
      {/* Gallery Section */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          color="#5C4033"
          fontWeight={700}
          fontFamily="Lora, serif"
          sx={{ mb: 4, textAlign: 'center' }}
        >
          Jubilee Pilgrimage of Hope Launch Gallery
        </Typography>
        <Grid container spacing={2} justifyContent="center" role="list">
          {JUBILEE_IMAGES.map((img, idx) => (
            <Grid xs={12} sm={6} md={4} key={img.src} role="listitem">
              <Card sx={{ background: 'rgba(255,255,255,0.95)', boxShadow: 1, borderRadius: 2, mb: 2, cursor: 'pointer' }} onClick={() => openLightbox(idx)} aria-label={`View larger image: ${img.alt}`} tabIndex={0} onKeyPress={e => { if (e.key === 'Enter') openLightbox(idx); }}>
                <CardContent sx={{ p: { xs: 1, md: 2 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 270 }}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ maxWidth: '100%', maxHeight: 180, objectFit: 'contain', display: 'block', margin: '0 auto', background: '#f5eee6' }}
                  />
                  <Typography variant="caption" color="#5C4033" sx={{ mt: 1, textAlign: 'center' }} aria-live="polite">
                    {img.alt}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* Lightbox Modal */}
        {lightboxOpen && (
          <Box role="dialog" aria-modal="true" tabIndex={-1} sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', bgcolor: 'rgba(44,32,18,0.85)', zIndex: 1300, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={closeLightbox}>
            <Box sx={{ position: 'relative', maxWidth: 800, width: '90vw', maxHeight: '90vh', bgcolor: '#fff', borderRadius: 2, boxShadow: 4, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={e => e.stopPropagation()}>
              <img
                src={JUBILEE_IMAGES[lightboxIndex].src}
                alt={JUBILEE_IMAGES[lightboxIndex].alt}
                style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain', borderRadius: 8, background: '#f5eee6' }}
              />
              <Typography variant="subtitle1" color="#5C4033" sx={{ mt: 2, mb: 1, textAlign: 'center' }}>
                {JUBILEE_IMAGES[lightboxIndex].alt}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                <Button onClick={showPrev} aria-label="Previous image" variant="outlined">&#8592; Prev</Button>
                <Button onClick={closeLightbox} aria-label="Close lightbox" variant="contained" color="primary">Close</Button>
                <Button onClick={showNext} aria-label="Next image" variant="outlined">Next &#8594;</Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default JubileePilgrimage; 