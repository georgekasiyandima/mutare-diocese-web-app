import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Typography,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { commissions, Commission, iconMap } from './constants/commissions';
import CommissionsHeroSection from './components/CommissionsSection/CommissionsHeroSection';
import FeaturedCommissionSection from './components/CommissionsSection/FeaturedCommissionSection';
import CommissionDialog from './components/CommissionsSection/CommissionDialog';
import GalleryModal from './components/CommissionsSection/GalleryModal';

const Commissions: React.FC = () => {
  const [selectedCommission, setSelectedCommission] = useState<Commission | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const handleCommissionClick = (commission: Commission) => {
    setSelectedCommission(commission);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedCommission(null);
  };

  const handleOpenGallery = (startIndex = 0) => {
    setGalleryIndex(startIndex);
    setGalleryOpen(true);
  };

  const handleCloseGallery = () => {
    setGalleryOpen(false);
  };

  const handleGalleryPrev = () => {
    if (!selectedCommission) return;
    setGalleryIndex((prev) => (prev === 0 ? selectedCommission.images.length - 1 : prev - 1));
  };

  const handleGalleryNext = () => {
    if (!selectedCommission) return;
    setGalleryIndex((prev) => (prev === selectedCommission.images.length - 1 ? 0 : prev + 1));
  };

  const featuredCommission = commissions.find(c => c.featured);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <CommissionsHeroSection commissionCount={commissions.length} />

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {featuredCommission && (
          <FeaturedCommissionSection 
            featuredCommission={featuredCommission}
            onCommissionClick={handleCommissionClick}
          />
        )}

        {/* All Commissions Grid */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 4,
              fontWeight: 600,
              color: 'text.primary'
            }}
          >
            All Commissions
          </Typography>
          
          <Grid container spacing={3}>
            {commissions.map((commission) => {
              const IconComponent = iconMap[commission.icon] || iconMap.default;
              return (
                <Grid item xs={12} sm={6} md={4} key={commission.id}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 8,
                      }
                    }}
                    onClick={() => handleCommissionClick(commission)}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={`/${commission.image}`}
                      alt={`${commission.name} Commission`}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <IconComponent sx={{ color: commission.color, mr: 1, fontSize: 24 }} />
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 600, color: commission.color }}>
                          {commission.name}
                        </Typography>
                      </Box>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                        {commission.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                        {commission.objectives.slice(0, 2).map((objective, index) => (
                          <Chip
                            key={index}
                            label={objective}
                            size="small"
                            sx={{
                              bgcolor: `${commission.color}15`,
                              color: commission.color,
                              fontSize: '0.75rem'
                            }}
                          />
                        ))}
                      </Box>
                      
                      <Button
                        variant="outlined"
                        size="small"
                        endIcon={<ArrowForward />}
                        sx={{
                          alignSelf: 'flex-start',
                          borderColor: commission.color,
                          color: commission.color,
                          '&:hover': {
                            borderColor: commission.color,
                            bgcolor: `${commission.color}10`
                          }
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>

      <CommissionDialog
        selectedCommission={selectedCommission}
        openDialog={openDialog}
        onCloseDialog={handleCloseDialog}
        onOpenGallery={handleOpenGallery}
      />

      <GalleryModal
        selectedCommission={selectedCommission}
        galleryOpen={galleryOpen}
        galleryIndex={galleryIndex}
        onCloseGallery={handleCloseGallery}
        onGalleryPrev={handleGalleryPrev}
        onGalleryNext={handleGalleryNext}
      />
    </Box>
  );
};

export default Commissions; 