import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  Grid,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  CardMedia,
} from '@mui/material';
import {
  Close,
  LocationOn,
  Phone,
  Email,
  Facebook,
  Instagram,
  YouTube,
  Twitter,
} from '@mui/icons-material';
import { Commission } from '../../constants/commissions';

interface CommissionDialogProps {
  selectedCommission: Commission | null;
  openDialog: boolean;
  onCloseDialog: () => void;
  onOpenGallery: (startIndex?: number) => void;
}

const CommissionDialog: React.FC<CommissionDialogProps> = React.memo(({
  selectedCommission,
  openDialog,
  onCloseDialog,
  onOpenGallery,
}) => {
  if (!selectedCommission) return null;

  return (
    <Dialog open={openDialog} onClose={onCloseDialog} maxWidth="md" fullWidth>
      <DialogTitle sx={{ pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {selectedCommission.logo && (
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  border: `2px solid ${selectedCommission.color}`,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'white'
                }}
              >
                <img
                  src={`/${selectedCommission.logo}`}
                  alt={`${selectedCommission.name} logo`}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    padding: '4px'
                  }}
                />
              </Box>
            )}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, color: selectedCommission.color }}>
                {selectedCommission.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {selectedCommission.shortName}
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={onCloseDialog}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent sx={{ pt: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              About
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
              {selectedCommission.description}
            </Typography>
            
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Objectives
            </Typography>
            <List dense>
              {selectedCommission.objectives.map((objective, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: selectedCommission.color
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={objective} />
                </ListItem>
              ))}
            </List>
            
            {selectedCommission.activities && selectedCommission.activities.length > 0 && (
              <>
                <Typography variant="h6" sx={{ mb: 2, mt: 3, fontWeight: 600 }}>
                  Key Activities
                </Typography>
                <List dense>
                  {selectedCommission.activities.map((activity, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: selectedCommission.color
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={activity} />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </Grid>
          
          <Grid item xs={12} md={6}>
            {selectedCommission.contact && (
              <>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {selectedCommission.contact.phone && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Phone sx={{ fontSize: 20, color: selectedCommission.color }} />
                      <Typography variant="body2">{selectedCommission.contact.phone}</Typography>
                    </Box>
                  )}
                  {selectedCommission.contact.email && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Email sx={{ fontSize: 20, color: selectedCommission.color }} />
                      <Typography variant="body2">{selectedCommission.contact.email}</Typography>
                    </Box>
                  )}
                  {selectedCommission.contact.address && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocationOn sx={{ fontSize: 20, color: selectedCommission.color }} />
                      <Typography variant="body2">{selectedCommission.contact.address}</Typography>
                    </Box>
                  )}
                  {selectedCommission.contact.website && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Email sx={{ fontSize: 20, color: selectedCommission.color }} />
                      <Typography variant="body2">
                        <a 
                          href={selectedCommission.contact.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: selectedCommission.color, textDecoration: 'none' }}
                        >
                          {selectedCommission.contact.website}
                        </a>
                      </Typography>
                    </Box>
                  )}
                </Box>
                
                {selectedCommission.contact.social && (
                  <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                    {selectedCommission.contact.social.facebook && (
                      <IconButton 
                        size="small" 
                        sx={{ color: '#1877f2' }}
                        onClick={() => window.open(selectedCommission.contact.social!.facebook, '_blank')}
                      >
                        <Facebook />
                      </IconButton>
                    )}
                    {selectedCommission.contact.social.twitter && (
                      <IconButton 
                        size="small" 
                        sx={{ color: '#1da1f2' }}
                        onClick={() => window.open(selectedCommission.contact.social!.twitter, '_blank')}
                      >
                        <Twitter />
                      </IconButton>
                    )}
                    {selectedCommission.contact.social.instagram && (
                      <IconButton 
                        size="small" 
                        sx={{ color: '#e4405f' }}
                        onClick={() => window.open(selectedCommission.contact.social!.instagram, '_blank')}
                      >
                        <Instagram />
                      </IconButton>
                    )}
                    {selectedCommission.contact.social.youtube && (
                      <IconButton 
                        size="small" 
                        sx={{ color: '#ff0000' }}
                        onClick={() => window.open(selectedCommission.contact.social!.youtube, '_blank')}
                      >
                        <YouTube />
                      </IconButton>
                    )}
                  </Box>
                )}
              </>
            )}
          </Grid>
        </Grid>
        
        {selectedCommission.images.length > 0 && (
          <>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Gallery ({selectedCommission.images.length} images)
            </Typography>
            <Grid container spacing={2}>
              {selectedCommission.images.slice(0, 8).map((image, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <CardMedia
                    component="img"
                    image={`/${image}`}
                    alt={`${selectedCommission.name} - Image ${index + 1}`}
                    sx={{
                      height: 120,
                      borderRadius: 2,
                      objectFit: 'contain',
                      cursor: 'pointer',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      },
                      bgcolor: '#f5f5f5'
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            {selectedCommission.images.length > 8 && (
              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  Showing 8 of {selectedCommission.images.length} images
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ 
                    borderColor: selectedCommission.color,
                    color: selectedCommission.color,
                    '&:hover': {
                      borderColor: selectedCommission.color,
                      bgcolor: `${selectedCommission.color}10`
                    }
                  }}
                  onClick={() => onOpenGallery(0)}
                >
                  View All Images
                </Button>
              </Box>
            )}
          </>
        )}
      </DialogContent>
      
      <DialogActions sx={{ p: 3, pt: 1 }}>
        <Button onClick={onCloseDialog} variant="outlined">
          Close
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: selectedCommission.color }}
        >
          Get Involved
        </Button>
      </DialogActions>
    </Dialog>
  );
});

CommissionDialog.displayName = 'CommissionDialog';

export default CommissionDialog; 