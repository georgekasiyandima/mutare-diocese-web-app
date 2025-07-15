import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  Button,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { Commission } from '../../constants/commissions';

interface GalleryModalProps {
  selectedCommission: Commission | null;
  galleryOpen: boolean;
  galleryIndex: number;
  onCloseGallery: () => void;
  onGalleryPrev: () => void;
  onGalleryNext: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = React.memo(({
  selectedCommission,
  galleryOpen,
  galleryIndex,
  onCloseGallery,
  onGalleryPrev,
  onGalleryNext,
}) => {
  if (!selectedCommission) return null;

  return (
    <Dialog open={galleryOpen} onClose={onCloseGallery} maxWidth="md" fullWidth>
      <DialogTitle sx={{ pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: selectedCommission.color }}>
            {selectedCommission.name} Gallery
          </Typography>
          <IconButton onClick={onCloseGallery}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 400 }}>
        <Box sx={{ width: '100%', textAlign: 'center', mb: 2 }}>
          <img
            src={`/${selectedCommission.images[galleryIndex]}`}
            alt={`${selectedCommission.name} Gallery ${galleryIndex + 1}`}
            style={{
              maxWidth: '100%',
              maxHeight: 400,
              objectFit: 'contain',
              borderRadius: 8,
              background: '#f5f5f5',
              margin: '0 auto'
            }}
          />
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Image {galleryIndex + 1} of {selectedCommission.images.length}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button onClick={onGalleryPrev} variant="outlined" size="small">Previous</Button>
          <Button onClick={onGalleryNext} variant="outlined" size="small">Next</Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
});

GalleryModal.displayName = 'GalleryModal';

export default GalleryModal; 