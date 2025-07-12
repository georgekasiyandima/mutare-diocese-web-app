import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2'; // Use Unstable_Grid2
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import { debounce } from 'lodash';

// Custom VisuallyHidden component for accessibility
const VisuallyHidden: React.FC<{ children: React.ReactNode; role?: string }> = ({ children, role }) => (
  <Box
    component="span"
    sx={{
      position: 'absolute',
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: 0,
    }}
    role={role}
  >
    {children}
  </Box>
);

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
  ariaLabel: string;
}

const ContactUs: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof ContactForm) =>
    debounce((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: undefined,
        }));
      }
    }, 300);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        setErrors({ message: errorData.message || 'An error occurred' });
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrors({ message: 'Network error, please try again' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 32, color: '#bfa14a' }} />,
      title: 'Address',
      content: "Bishop's House, Marymount Road, P.O. Box 47, Mutare, Zimbabwe",
      ariaLabel: 'Diocese address',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 32, color: '#bfa14a' }} />,
      title: 'Phone',
      content: '+263 020 62347',
      ariaLabel: 'Diocese phone number',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 32, color: '#bfa14a' }} />,
      title: 'Email',
      content: 'diomutare@gmail.com',
      ariaLabel: 'Diocese email address',
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 32, color: '#bfa14a' }} />,
      title: 'Office Hours',
      content: 'Monday - Friday: 8:00 AM - 5:00 PM',
      ariaLabel: 'Office hours',
    },
  ];

  return (
    <Box sx={{ maxWidth: { xs: '100vw', lg: 1200 }, mx: 'auto', overflowX: 'hidden', px: { xs: 2, sm: 4 } }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: isMobile ? 280 : 320,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(rgba(44,32,18,0.35), rgba(44,32,18,0.35)), url('/cathedral.jpg') center/cover no-repeat`,
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
          }}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            color="#fff"
            fontWeight={700}
            fontFamily="Lora, serif"
            sx={{ textShadow: '2px 4px 12px #5C4033', mb: 2 }}
          >
            Contact Us
          </Typography>
          <Typography
            variant={isMobile ? 'body1' : 'h6'}
            color="#fff"
            sx={{ textShadow: '1px 2px 8px #5C4033' }}
          >
            Get in touch with the Catholic Diocese of Mutare
          </Typography>
        </Box>
      </Box>

      {/* Contact Information Cards */}
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          color="#5C4033"
          fontWeight={700}
          fontFamily="Lora, serif"
          sx={{ mb: 3, textAlign: 'center' }}
        >
          Get In Touch
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {contactInfo.map((info, index) => (
            <Grid xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(255,255,255,0.95)',
                  borderLeft: '5px solid #bfa14a',
                  borderRadius: 2,
                  boxShadow: 1,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(191,161,74,0.2)',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ mb: 2 }} aria-label={info.ariaLabel}>
                    {info.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    color="#5C4033"
                    fontWeight={700}
                    fontFamily="Lora, serif"
                    sx={{ mb: 1 }}
                  >
                    {info.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.5 }}
                  >
                    {info.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact Form and Map Section */}
      <Box
        display="flex"
        flexDirection={{ xs: 'column', lg: 'row' }}
        gap={4}
        sx={{ mb: { xs: 4, md: 6 } }}
      >
        {/* Contact Form */}
        <Box sx={{ flex: 1, maxWidth: { lg: 600 } }}>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            color="#5C4033"
            fontWeight={700}
            fontFamily="Lora, serif"
            sx={{ mb: 3 }}
          >
            Send Us a Message
          </Typography>

          {submitStatus === 'success' && (
            <>
              <VisuallyHidden role="alert">Message sent successfully</VisuallyHidden>
              <Card sx={{ mb: 3, bgcolor: '#e8f5e8', border: '1px solid #4caf50' }}>
                <CardContent>
                  <Typography color="#2e7d32" fontWeight={600}>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </Typography>
                </CardContent>
              </Card>
            </>
          )}

          {submitStatus === 'error' && (
            <>
              <VisuallyHidden role="alert">Error sending message</VisuallyHidden>
              <Card sx={{ mb: 3, bgcolor: '#ffebee', border: '1px solid #f44336' }}>
                <CardContent>
                  <Typography color="#c62828" fontWeight={600}>
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </Typography>
                </CardContent>
              </Card>
            </>
          )}

          <Card sx={{ background: 'rgba(255,255,255,0.95)', boxShadow: 2 }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <form onSubmit={handleSubmit} aria-label="Contact form">
                <Grid container spacing={3}>
                  <Grid xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      value={formData.name}
                      onChange={handleInputChange('name')}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                      aria-label="Enter your full name"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: '#bfa14a' },
                          '&.Mui-focused fieldset': { borderColor: '#5C4033' },
                        },
                      }}
                    />
                  </Grid>
                  <Grid xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                      aria-label="Enter your email address"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: '#bfa14a' },
                          '&.Mui-focused fieldset': { borderColor: '#5C4033' },
                        },
                      }}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      value={formData.subject}
                      onChange={handleInputChange('subject')}
                      error={!!errors.subject}
                      helperText={errors.subject}
                      required
                      aria-label="Enter message subject"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: '#bfa14a' },
                          '&.Mui-focused fieldset': { borderColor: '#5C4033' },
                        },
                      }}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange('message')}
                      error={!!errors.message}
                      helperText={errors.message}
                      required
                      aria-label="Enter your message"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: '#bfa14a' },
                          '&.Mui-focused fieldset': { borderColor: '#5C4033' },
                        },
                      }}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      startIcon={<SendIcon />}
                      aria-label="Send message"
                      sx={{
                        fontWeight: 600,
                        borderRadius: 8,
                        py: 1.5,
                        px: 4,
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(191,161,74,0.3)',
                          bgcolor: '#bfa14a',
                          color: '#fff',
                          transition: 'all 0.3s ease',
                        },
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Box>

        {/* Map Section */}
        <Box sx={{ flex: 1, maxWidth: { lg: 600 } }}>
          <Typography
            variant={isMobile ? 'h5' : 'h4'}
            color="#5C4033"
            fontWeight={700}
            fontFamily="Lora, serif"
            sx={{ mb: 3 }}
          >
            Find Us
          </Typography>
          <Card sx={{ background: 'rgba(255,255,255,0.95)', boxShadow: 2 }}>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <img
                src="/Map.jpg"
                alt="Map showing the location of the Catholic Diocese of Mutare"
                style={{
                  width: '100%',
                  height: isMobile ? 200 : 300,
                  objectFit: 'cover',
                  borderRadius: 8,
                  boxShadow: '0 2px 8px rgba(44,32,18,0.1)',
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/fallback-map.png';
                }}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, textAlign: 'center' }}
              >
                The Diocese covers Maungwe, Mutasa, Mutare, Nyanga, Chimanimani, and Chipinge districts.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;