import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelIcon from '@mui/icons-material/Hotel';
import EventIcon from '@mui/icons-material/Event';
import BusinessIcon from '@mui/icons-material/Business';

const MDTC_IMAGES = [
  { src: '/mdtc3m.jpg', alt: 'Mutare Diocesan Training Centre - Main Building', title: 'Main Building' },
  { src: '/mdtc6c.jpg', alt: 'MDTC Conference Facilities', title: 'Conference Hall' },
  { src: '/mdtc2.jpg', alt: 'MDTC Accommodation and Guest Services', title: 'Guest Accommodation' },
  { src: '/mdtc1.jpg', alt: 'MDTC Catering and Dining Services', title: 'Dining Area' },
  { src: '/mdtc5m.jpg', alt: 'MDTC Meeting Rooms and Training Facilities', title: 'Meeting Rooms' },
  { src: '/mdtc4o.jpg', alt: 'MDTC Outdoor and Recreational Areas', title: 'Outdoor Areas' },
];

const SERVICES = [
  {
    icon: <EventIcon sx={{ fontSize: 48, color: '#bfa14a' }} />,
    title: 'Conference Centre',
    description: 'State-of-the-art conference facilities with modern audio-visual equipment, comfortable seating, and flexible room configurations for events of all sizes.',
    features: ['Large Conference Hall', 'Meeting Rooms', 'Audio-Visual Equipment', 'Professional Staff Support']
  },
  {
    icon: <RestaurantIcon sx={{ fontSize: 48, color: '#bfa14a' }} />,
    title: 'Catering Services',
    description: 'Professional catering services offering delicious meals for conferences, workshops, and special events with options for various dietary requirements.',
    features: ['Full-Service Catering', 'Coffee Breaks', 'Buffet Services', 'Special Dietary Options']
  },
  {
    icon: <HotelIcon sx={{ fontSize: 48, color: '#bfa14a' }} />,
    title: 'Guest Services',
    description: 'Comfortable accommodation for visitors, clergy, and conference attendees with modern amenities and peaceful surroundings.',
    features: ['Comfortable Rooms', '24/7 Support', 'Peaceful Environment', 'Affordable Rates']
  }
];

const MutarePastoralCentre: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Box sx={{ maxWidth: { xs: '100vw', lg: 1200 }, mx: 'auto', overflowX: 'hidden', px: { xs: 2, sm: 4 } }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: isMobile ? 320 : 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(rgba(44,32,18,0.4), rgba(44,32,18,0.4)), url('/mdtc -crop-u21911.jpg') center/cover no-repeat`,
          borderRadius: 4,
          boxShadow: 3,
          mb: { xs: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            px: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            color="#fff"
            fontWeight={700}
            fontFamily="Lora, serif"
            sx={{ textShadow: '2px 4px 12px #5C4033', mb: 2 }}
          >
            Mutare Diocesan Training Centre
          </Typography>
          <Typography
            variant={isMobile ? 'body1' : 'h6'}
            color="#fff"
            sx={{ textShadow: '1px 2px 8px #5C4033', mb: 3 }}
          >
            Your Premier Conference, Catering & Accommodation Facility
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component="a"
            href="#contact"
            aria-label="Contact MDTC for bookings"
            sx={{
              fontWeight: 600,
              borderRadius: 8,
              px: 4,
              py: 1.5,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(191,161,74,0.3)',
                transition: 'all 0.3s ease'
              }
            }}
          >
            Book Now
          </Button>
        </Box>
      </Box>

      {/* Introduction Section */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          color="#5C4033"
          fontWeight={700}
          fontFamily="Lora, serif"
          sx={{ mb: 3, textAlign: 'center' }}
        >
          Supporting the Diocese Through Excellence
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ 
            textAlign: 'center', 
            maxWidth: 800, 
            mx: 'auto',
            lineHeight: 1.8,
            mb: 4
          }}
        >
          The Mutare Diocesan Training Centre (MDTC) serves as a vital revenue-generating facility for the Catholic Diocese of Mutare. 
          Our modern conference centre, professional catering services, and comfortable guest accommodation provide essential financial 
          support while serving the community with excellence.
        </Typography>
      </Box>

      {/* Services Section */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          color="#5C4033"
          fontWeight={700}
          fontFamily="Lora, serif"
          sx={{ mb: 4, textAlign: 'center' }}
        >
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {SERVICES.map((service, index) => (
            <Grid xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(255,255,255,0.95)',
                  borderLeft: '5px solid #bfa14a',
                  borderRadius: 3,
                  boxShadow: 2,
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 25px rgba(191,161,74,0.2)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    color="#5C4033"
                    fontWeight={700}
                    fontFamily="Lora, serif"
                    sx={{ mb: 2 }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.6 }}
                  >
                    {service.description}
                  </Typography>
                  <Box component="ul" sx={{ textAlign: 'left', pl: 2 }}>
                    {service.features.map((feature, featureIndex) => (
                      <Typography
                        key={featureIndex}
                        component="li"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 0.5 }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Image Gallery Section */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          color="#5C4033"
          fontWeight={700}
          fontFamily="Lora, serif"
          sx={{ mb: 4, textAlign: 'center' }}
        >
          Our Facilities
        </Typography>
        
        {/* Main Image Display */}
        <Box sx={{ mb: 3 }}>
          <Card sx={{ background: 'rgba(255,255,255,0.95)', boxShadow: 2 }}>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <img
                src={MDTC_IMAGES[selectedImage].src}
                alt={MDTC_IMAGES[selectedImage].alt}
                style={{
                  width: '100%',
                  height: isMobile ? 250 : 400,
                  objectFit: 'cover',
                  borderRadius: 8,
                  boxShadow: '0 4px 12px rgba(44,32,18,0.1)',
                }}
              />
              <Typography
                variant="h6"
                color="#5C4033"
                fontWeight={600}
                fontFamily="Lora, serif"
                sx={{ mt: 2, textAlign: 'center' }}
              >
                {MDTC_IMAGES[selectedImage].title}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Thumbnail Navigation */}
        <Grid container spacing={2} justifyContent="center">
          {MDTC_IMAGES.map((image, index) => (
            <Grid xs={6} sm={4} md={2} key={index}>
              <Card
                sx={{
                  cursor: 'pointer',
                  border: selectedImage === index ? '3px solid #bfa14a' : '1px solid #e0e0e0',
                  borderRadius: 2,
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.2s ease'
                  }
                }}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: 80,
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Revenue Impact Section */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <Card sx={{ 
          background: 'linear-gradient(135deg, #fffbe6 0%, #bfa14a22 100%)',
          border: '2px solid #bfa14a',
          borderRadius: 3,
          boxShadow: 2
        }}>
          <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
            <BusinessIcon sx={{ fontSize: 64, color: '#bfa14a', mb: 2 }} />
            <Typography
              variant={isMobile ? 'h5' : 'h4'}
              color="#5C4033"
              fontWeight={700}
              fontFamily="Lora, serif"
              sx={{ mb: 2 }}
            >
              Supporting the Diocese's Mission
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.8 }}
            >
              The MDTC plays a crucial role in the financial sustainability of the Catholic Diocese of Mutare. 
              Revenue generated from our conference, catering, and accommodation services directly supports 
              the diocese's pastoral work, community programs, and charitable initiatives throughout Manicaland.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ mb: { xs: 4, md: 6 } }}>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          color="#5C4033"
          fontWeight={700}
          fontFamily="Lora, serif"
          sx={{ mb: 4, textAlign: 'center' }}
        >
          Book Your Event
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          <Grid xs={12} md={6}>
            <Card sx={{ background: 'rgba(255,255,255,0.95)', boxShadow: 2 }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="h6"
                  color="#5C4033"
                  fontWeight={700}
                  fontFamily="Lora, serif"
                  sx={{ mb: 3 }}
                >
                  Contact Information
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOnIcon sx={{ color: '#bfa14a', mr: 2 }} />
                    <Typography variant="body2" color="text.secondary">
                      Mutare Diocesan Training Centre, Marymount Road, Mutare
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PhoneIcon sx={{ color: '#bfa14a', mr: 2 }} />
                    <Typography variant="body2" color="text.secondary">
                      +263 020 62347
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailIcon sx={{ color: '#bfa14a', mr: 2 }} />
                    <Typography variant="body2" color="text.secondary">
                      mdtc@diomutare.org
                    </Typography>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  component="a"
                  href="/contact"
                  aria-label="Contact MDTC for bookings and inquiries"
                  sx={{
                    fontWeight: 600,
                    borderRadius: 8,
                    py: 1.5,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(191,161,74,0.3)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  Inquire About Bookings
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid xs={12} md={6}>
            <Card sx={{ background: 'rgba(255,255,255,0.95)', boxShadow: 2 }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="h6"
                  color="#5C4033"
                  fontWeight={700}
                  fontFamily="Lora, serif"
                  sx={{ mb: 3 }}
                >
                  Why Choose MDTC?
                </Typography>
                
                <Box component="ul" sx={{ pl: 2 }}>
                  <Typography component="li" variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Professional conference facilities with modern equipment
                  </Typography>
                  <Typography component="li" variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Delicious catering services for all occasions
                  </Typography>
                  <Typography component="li" variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Comfortable and affordable accommodation
                  </Typography>
                  <Typography component="li" variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Peaceful environment conducive to learning and reflection
                  </Typography>
                  <Typography component="li" variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Supporting the diocese's mission and community programs
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MutarePastoralCentre; 