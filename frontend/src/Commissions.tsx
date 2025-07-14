import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Paper,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
  ArrowForward,
  Star,
} from '@mui/icons-material';
import { commissions, Commission, iconMap } from './constants/commissions';

const Commissions: React.FC = () => {
  const theme = useTheme();
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
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              Diocesan Commissions
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
                maxWidth: 800,
                mx: 'auto',
                fontSize: { xs: '1.1rem', md: '1.3rem' }
              }}
            >
              Serving the Diocese of Mutare through specialized ministries and outreach programs
            </Typography>
            <Chip
              icon={<Star />}
              label={`${commissions.length} Active Commissions`}
              sx={{
                bgcolor: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontSize: '1.1rem',
                py: 1
              }}
            />
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Featured Commission */}
        {featuredCommission && (
          <Box sx={{ mb: 8 }}>
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
              Featured Commission
            </Typography>
            
            <Paper
              elevation={8}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                background: `linear-gradient(135deg, ${featuredCommission.color}15 0%, ${featuredCommission.color}05 100%)`,
                border: `2px solid ${featuredCommission.color}30`
              }}
            >
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      {featuredCommission.logo && (
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            mr: 2,
                            borderRadius: '50%',
                            border: `3px solid ${featuredCommission.color}`,
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'white'
                          }}
                        >
                          <img
                            src={featuredCommission.logo}
                            alt={`${featuredCommission.name} logo`}
                            style={{
                              maxWidth: '100%',
                              maxHeight: '100%',
                              objectFit: 'contain',
                              padding: '8px'
                            }}
                          />
                        </Box>
                      )}
                      <Box>
                        <Typography variant="h4" component="h3" sx={{ fontWeight: 700, color: featuredCommission.color }}>
                          {featuredCommission.name}
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                          {featuredCommission.shortName}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                      {featuredCommission.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                      {featuredCommission.objectives.slice(0, 3).map((objective, index) => (
                        <Chip
                          key={index}
                          label={objective}
                          size="small"
                          sx={{
                            bgcolor: `${featuredCommission.color}20`,
                            color: featuredCommission.color,
                            fontWeight: 500
                          }}
                        />
                      ))}
                    </Box>
                    
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => handleCommissionClick(featuredCommission)}
                      sx={{
                        bgcolor: featuredCommission.color,
                        '&:hover': { bgcolor: featuredCommission.color, opacity: 0.9 },
                        alignSelf: 'flex-start',
                        px: 4,
                        py: 1.5
                      }}
                    >
                      Learn More
                      <ArrowForward sx={{ ml: 1 }} />
                    </Button>
                  </Box>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Box sx={{ position: 'relative', height: { xs: 300, md: 400 } }}>
                    <CardMedia
                      component="img"
                      image={featuredCommission.images[0]}
                      alt={featuredCommission.name}
                      sx={{
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                        p: 3,
                        color: 'white'
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Empowering Young People
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        Building the future of the Church through faith, leadership, and service
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        )}

        {/* All Commissions Grid */}
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 600,
            color: 'text.primary'
          }}
        >
          All Commissions
        </Typography>

        <Grid container spacing={4}>
          {commissions.map((commission) => (
            <Grid item xs={12} sm={6} lg={4} key={commission.id}>
              <Card
                elevation={4}
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    elevation: 8,
                    boxShadow: theme.shadows[12]
                  }
                }}
                onClick={() => handleCommissionClick(commission)}
              >
                <Box
                  sx={{
                    height: 200,
                    background: `linear-gradient(135deg, ${commission.color} 0%, ${commission.color}dd 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  <Box
                    sx={{
                      color: 'white',
                      textAlign: 'center'
                    }}
                  >
                    <Box sx={{ fontSize: 60, mb: 2 }}>
                      {React.createElement(iconMap[commission.iconName as keyof typeof iconMap])}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {commission.shortName}
                    </Typography>
                  </Box>
                </Box>
                
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                    {commission.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                    {commission.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Commission Detail Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 3 }
        }}
      >
        {selectedCommission && (
          <>
            <DialogTitle sx={{ pb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {selectedCommission.logo && (
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        mr: 2,
                        borderRadius: '50%',
                        border: `2px solid ${selectedCommission.color}`,
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'white',
                        p: 1
                      }}
                    >
                      <img
                        src={selectedCommission.logo}
                        alt={`${selectedCommission.name} logo`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          background: '#f5f5f5',
                          padding: 4,
                          display: 'block',
                          margin: '0 auto'
                        }}
                      />
                    </Box>
                  )}
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: selectedCommission.color }}>
                      {selectedCommission.name}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                      {selectedCommission.shortName}
                    </Typography>
                  </Box>
                </Box>
                <IconButton onClick={handleCloseDialog}>
                  <Close />
                </IconButton>
              </Box>
            </DialogTitle>
            
            <DialogContent sx={{ pt: 2 }}>
              {/* Banner Image for CCJP */}
              {selectedCommission.id === 'justice-peace' && selectedCommission.images.length > 0 && (
                <Box sx={{ mb: 4 }}>
                  <img
                    src={selectedCommission.images[0]}
                    alt={`${selectedCommission.name} Banner`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '300px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      backgroundColor: '#f5f5f5'
                    }}
                  />
                </Box>
              )}
              
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Mission
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {selectedCommission.mission}
                  </Typography>
                  
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Vision
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
                    {selectedCommission.vision}
                  </Typography>
                  
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Key Objectives
                  </Typography>
                  <List dense>
                    {selectedCommission.objectives.map((objective, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
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
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Activities & Programs
                  </Typography>
                  <List dense>
                    {selectedCommission.activities.map((activity, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
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
                  
                  {selectedCommission.contact && (
                    <>
                      <Divider sx={{ my: 3 }} />
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
                          image={image}
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
                        onClick={() => handleOpenGallery(0)}
                      >
                        View All Images
                      </Button>
                    </Box>
                  )}
                </>
              )}
            </DialogContent>
            
            <DialogActions sx={{ p: 3, pt: 1 }}>
              <Button onClick={handleCloseDialog} variant="outlined">
                Close
              </Button>
              <Button
                variant="contained"
                sx={{ bgcolor: selectedCommission.color }}
              >
                Get Involved
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Gallery Modal */}
      {selectedCommission && (
        <Dialog open={galleryOpen} onClose={handleCloseGallery} maxWidth="md" fullWidth>
          <DialogTitle sx={{ pb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: selectedCommission.color }}>
                {selectedCommission.name} Gallery
              </Typography>
              <IconButton onClick={handleCloseGallery}>
                <Close />
              </IconButton>
            </Box>
          </DialogTitle>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 400 }}>
            <Box sx={{ width: '100%', textAlign: 'center', mb: 2 }}>
              <img
                src={selectedCommission.images[galleryIndex]}
                alt={`${selectedCommission.name} Gallery Image ${galleryIndex + 1}`}
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
              <Button onClick={handleGalleryPrev} variant="outlined" size="small">Previous</Button>
              <Button onClick={handleGalleryNext} variant="outlined" size="small">Next</Button>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </Box>
  );
};

export default Commissions; 