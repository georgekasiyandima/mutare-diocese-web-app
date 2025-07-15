import React from 'react';
import WorkInProgress from './components/WorkInProgress/WorkInProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Vocations: React.FC = () => (
  <Box sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxHeight: 320,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 4,
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: 3,
        background: '#f5f5f5',
      }}
    >
      <img
        src="/vocs1.jpg"
        alt="Vocations Hero"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: 320,
          objectFit: 'cover',
          display: 'block',
        }}
      />
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(44,32,18,0.45)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#fff',
            fontWeight: 700,
            fontFamily: 'Lora, serif',
            textShadow: '2px 4px 12px #5C4033',
            mb: 1,
            fontSize: { xs: '2rem', md: '3rem' },
            textAlign: 'center',
          }}
        >
          Vocations
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: '#fff',
            opacity: 0.92,
            fontWeight: 400,
            fontFamily: 'Lora, serif',
            textShadow: '1px 2px 8px #5C4033',
            fontSize: { xs: '1.1rem', md: '1.5rem' },
            textAlign: 'center',
          }}
        >
          Answering God’s Call
        </Typography>
      </Box>
    </Box>
    <WorkInProgress 
      message="Vocations Page Coming Soon" 
      subtext="Information about vocations, religious life, and priesthood in the Diocese will be available here." 
    />
  </Box>
);

export default Vocations; 